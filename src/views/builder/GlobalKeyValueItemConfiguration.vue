<template>
    <SidebarToggleableContainer :headline="blockTitle">

        <label>
            {{ title }}
            <span class="pointer ml-2"
                  title="Click To Add A New Item"
                  @click="addItem"
                  v-html="$form.getIcon('addOutline', '25px', '25px', 'green')">
            </span>
        </label>

        <div class="list-selection"
             v-for="(keyValueItem, ruleIndex) in items"
             :key="ruleIndex">

            <div class="tool-block">
                <span class="pointer"
                      title="Click this to remove this rule"
                      @click="removeItem(ruleIndex)"
                      v-html="$form.getIcon('close', '20px', '20px', 'red')">
                </span>
            </div>

            <div :class="styles.FORM.FORM_GROUP">
                <label v-text="keyTitle"></label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="keyValueItem.key">
            </div>

            <div :class="styles.FORM.FORM_GROUP">

                <label v-text="valueTitle"></label>
                <input type="text"
                       :class="styles.FORM.FORM_CONTROL"
                       v-model="keyValueItem.value">
            </div>

        </div>

    </SidebarToggleableContainer>
</template>

<script>
import {STYLE_INJECTION_MIXIN} from "@/mixins/style-injection-mixin";
import KeyValueItem from "@/libraries/classes/key-value-item.class";
import SidebarToggleableContainer from "@/views/container-views/SidebarToggleableContainer";

export default {
    name: "GlobalKeyValueItemConfiguration",
    components: {
        SidebarToggleableContainer
    },
    mixins: [STYLE_INJECTION_MIXIN],
    props: {
        // main data
        items: Array,

        // configurable texts
        blockTitle: String,
        title: String,
        keyTitle: String,
        valueTitle: String
    },

    methods: {
        addItem() {
            this.items.push(
                new KeyValueItem()
            )
        },
        removeItem(index) {
            this.items.splice(index, 1)
        }
    }
}
</script>