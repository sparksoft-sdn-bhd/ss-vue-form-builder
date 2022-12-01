<template>
    <div>
        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>Display Mode</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.displayMode">

                <option v-for="item in listDisplayModes"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div> -->

        <!-- <div :class="styles.FORM.FORM_GROUP">
            <label>Display Position</label>
            <select :class="styles.FORM.FORM_CONTROL"
                    v-model="control.position">

                <option v-for="item in listPositions"
                        :key="item.val"
                        :value="item.val"
                        v-text="item.description">
                </option>

            </select>
        </div> -->

        <div :class="styles.FORM.FORM_GROUP">
            <label>
                Add List Selections
                <span class="pointer ml-2"
                      @click="addListItem"
                      v-html="$form.getIcon('addOutline', '25px', '25px', 'green')">
                </span>
            </label>

            <!-- Im using div instead of table. Table too small :( -->
            <div :class="['list-selection']" v-for="(listItem, iItem) in control.items" :key="iItem">

                <div class="tool-block">
                    <span class="pointer"
                          @click="removeListItem(iItem)"
                          v-html="$form.getIcon('close', '20px', '20px', 'red')">
                    </span>
                </div>

                <div :class="styles.FORM.FORM_GROUP">
                    <label>Option (Ex: Label Text)</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Label text"
                           v-model="listItem.text">
                </div>

                <!-- <div :class="styles.FORM.FORM_GROUP">
                    <label>Label Value (Ex: label_text)</label>
                    <input type="text" :class="styles.FORM.FORM_CONTROL"
                           placeholder="Radio/Checkbox-Value"
                           v-model="listItem.value">
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import {CONTROL_SPECIAL_CONFIG_MIXIN} from "@/mixins/control-special-config-mixin";
    import {RADIO_CHECKBOX_POSITION, RADIO_CHECKBOX_STYLE} from "@/configs/control-config-enum";
    import ListItem from "@/libraries/list-item.class";

    export default {
        name: "RadioCheckboxConfigView",
        mixins: [CONTROL_SPECIAL_CONFIG_MIXIN],

        methods: {
            /**
             * Add new List-Item for the Current Radio/Checkbox
             */
            addListItem() {
                this.control.items.push(
                    new ListItem('', '')
                )
            },

            /**
             * Remove list-Item by Index of the Array
             */
            removeListItem(index) {
                this.control.items.splice(index, 1)
            }
        },

        watch: {
            'control.items': {
                handler() {
                    this.control.items.forEach((item) => {
                        item.value = item.text
                    })
                },
                deep: true,
                immediate: true
            }
        },

        computed: {
            /**
             * Configuration for the displayMode
             */
            listDisplayModes: () => RADIO_CHECKBOX_STYLE,

            /**
             * Configuration for the position
             */
            listPositions: () => RADIO_CHECKBOX_POSITION
        }
    }
</script>