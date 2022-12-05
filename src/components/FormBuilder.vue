<template>
    <div>
        <div class="header-bar">
            <button class="btn outline-form-btn float-left" @click="viewRenderer">
                <span v-show="formData.isRenderer">
                    BACK TO BUILDER
                </span>
                <span v-show="!formData.isRenderer">
                    PREVIEW
                </span>
            </button>
            <button class="btn outline-form-btn" @click="$emit('publish', formData)">PUBLISH</button>
            <button class="btn outline-form-btn mr-3" @click="$emit('cancel')">CANCEL</button>
        </div>
        
        <div class="main-container-fluid" v-if="!formData.isRenderer">
            <div class="container-fluid md-layout form-padding vue-form-builder">
                <!-- top configuration -->
                <FormConfiguration
                    :permissions="permissions"
                    v-model="formData.formConfig"
                    class="align-right"
                />

                <!-- form headline -->
                <div class="form-headline-container" v-show="formData.formConfig.headline && formData.formConfig.isShowHeadline">
                    <h1 v-text="formData.formConfig.headline"></h1>
                    <p v-text="formData.formConfig.subHeadline"></p>
                </div>
                <hr/>

                <!-- sections of the form -->
                <SectionContainer
                    v-for="(sectionData) in sortedSections"
                    :section="sectionData"
                    :rows="formData.rows"
                    :controls="formData.controls"
                    :key="sectionData.uniqueId"
                    :permissions="permissions"
                />

                <!-- below all -->
                <AddSectionControl
                    v-if="permissions.canAddSection"
                    @addSectionNotify="addSection"
                />

                <!-- global stuff -->
                <GlobalSidebar
                    :formData="formData"
                    :permissions="permissions"
                />
                <GlobalModal
                    :formData="formData"
                    :permissions="permissions"
                />
            </div>
        </div>

        <!-- PREVIEW FORM DATA -->
        <div v-if="formData.isRenderer" style="padding: 20px; margin-right: 0">
            <FormRenderer :form-configuration="formData" />
        </div> 
    </div>
</template>

<script>
    import AddSectionControl from "@/views/builder/add-controls/AddSectionControl";
    import FormRenderer from "@/components/FormRenderer";
    import SectionContainer from "@/views/builder/SectionContainer";
    import FormBuilderBusiness from "@/mixins/form-builder-mixins";
    import FormConfiguration from "@/views/builder/FormConfiguration";
    import GlobalSidebar from "@/views/builder/GlobalSidebar";
    import GlobalModal from "@/views/builder/GlobalModal";
    import DefaultPermission from "@/configs/roles";

    export default {
        name: "FormBuilder",
        components: {
            GlobalModal,
            GlobalSidebar,
            FormConfiguration,
            SectionContainer,
            AddSectionControl,
            FormRenderer
        },
        mixins: FormBuilderBusiness,

        props: {
            permissions: {
                type: Object,
                default: () => {
                    return DefaultPermission
                }
            }
        },

        data: () => ({
            formData: {
                isRenderer: false,
                formData: null,
                formInputData: null,
                isShowData: false,
                formConfig: {},
                sections: {},
                rows: {},
                controls: {},
            },
        }),

        created() {
            if (this.value && typeof this.value === 'object') {
                this.mapping(this.value)
            } else {
                this.setData()
            }
        },

        methods: {
            viewRenderer() {
                if (!this.formData.isRenderer) {
                    this.setData();
                    this.formData.isRenderer = true;
                    
                    return;
                }

                this.formData.isRenderer = false;
                this.setData();
            },

            setData() {
                this.formData = Object.assign({}, this.formData);
            },
        }
    }
</script>
