<template>
  <div>
    <tr-sender />
    <tiny-button-group :data="groupData" v-model="checkedVal"></tiny-button-group>
    <span>当前选中值：{{ checkedVal }}</span>
    <tiny-alert description="type 为默认值 success"></tiny-alert>
    <div>
      <icon-share class="tiny-svg-size icon-share"></icon-share>
      <tiny-icon-add></tiny-icon-add>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButtonGroup, TinyAlert } from '@opentiny/vue'
import { iconShare, iconAdd as TinyIconAdd } from '@opentiny/vue-icon'
import { TrSender } from '@opentiny/tiny-robot'

const checkedVal = ref('Button1')
const groupData = ref([
  { text: 'Button1', value: 'Button1' },
  { text: 'Button2', value: 'Button2' },
  { text: 'Button3', value: 'Button3' }
])
</script>
