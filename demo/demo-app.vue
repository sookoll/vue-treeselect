<template>
    <div>
        <div style="margin-top: 100px; margin-left: 100px; max-width: 300px;">
        <vue-treeselect
            :multiple="true"
            :options="[treeData]"
            noResultsText="No results..."
            placeholder="Select items..."
            v-model="selected"
            :appendToBody="false"
            :default-expand-level="0"
            :autoSelectDescendants="true"
            :autoDeselectDescendants="true"
            :flat="true"
            :searchable="false"
            :show-count="true"
        >
        </vue-treeselect>
        </div>
        <div>
            Selected: {{selected}}
        </div>

        Append to body:

        <div style="margin-top: 100px; margin-left: 100px; max-width:300px;">
        <vue-treeselect
            :multiple="true"
            :options="[treeData]"
            placement="top"
            noResultsText="No results..."
            placeholder="Select items..."
            v-model="selected2"
            :appendToBody="true"
            :default-expand-level="0"
            :autoSelectDescendants="true"
            :autoDeselectDescendants="true"
            :flat="true"
            :searchable="false"
            :show-count="true"
        >
        </vue-treeselect>
        </div>
    </div>
</template>
<script>
import { defineComponent,ref,reactive } from 'vue';

export default defineComponent({

    setup() {

        let selected = ref([]);
        let selected2 = ref([]);
        let treeOrientation = ref("0");
        let treeData = reactive({
            label: 'root',
            expand: true,
            id: 1,
            children: [
                { label: 'child 1', id: 2, },
                { label: 'child 2', id: 3, },
                { 
                    label: 'subparent 1', 
                    id: 4, 
                    expand: false, 
                    children: [
                        { label: 'subchild 1', id: 5 },
                        {  
                            label: 'subchild 2', 
                            id: 6, 
                            expand: false, 
                            children: [
                                { label: 'subchild 11', id: 7 },
                                { label: 'subchild 22', id: 8 },
                            ]
                        },
                    ]
                },
            ]
        });


        return {
            treeData,
            selected,
            selected2
        }
    }
})

</script>
