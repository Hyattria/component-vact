<template>
  <div
    :class="[
      type === 'textarea' ? 'ac-textarea' : 'ac-input',
      type !== 'textarea' && status ? 'ac-input--' + status : '',
      size ? 'ac-input--' + size : '',
      { 'ac-disabled': disabled,
        'ac-input-group': $slots.prepend || $slots.append,
        'ac-input-group--append': $slots.append,
        'ac-input-group--prepend': $slots.prepend,
        'ac-input--prefix': $slots.prefix || prefixIcon,
        'ac-input--suffix': $slots.suffix || suffixIcon || clearable || status }
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">

    <template v-if="type !== 'textarea'">
      <div class="ac-input-group__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </div>
      <input
        :type="type"
        :placeholder="placeholder"
        :disabled='disabled'
        v-bind="$attrs"
        v-model="model"
        class="ac-input__inner"
        :class="[
          status ? 'ac-input__status--' + status : '',
          {
            'is-round': round
          }
        ]"
        @focus="handleFocus"
        @blur="handleBlur"
        >
        <!-- 前置内容 -->
        <span class="ac-input__prefix" v-if="$slots.prefix || prefixIcon">
          <slot name="prefix"></slot>
          <i class="ac-input__icon"
            v-if="prefixIcon"
            :class="prefixIcon">
          </i>
        </span>

        <!-- 后置内容 -->
        <span
          class="ac-input__suffix"
          v-if="$slots.suffix || suffixIcon || showClear || status"
          >
          <span class="ac-input__suffix-inner">
            <template v-if="!showClear">
              <slot name="suffix"></slot>
              <i class="ac-input__icon"
                v-if="suffixIcon"
                :class="suffixIcon">
              </i>
            </template>
            <i v-else
              class="ac-input__icon ac-icon-roundclose ac-input__clear"
              @click="clear"
            ></i>
            <template v-if="status">
              <i class="ac-input__icon"
                :class="statusIcon"
                :style="statusColor">
              </i>
            </template>
          </span>
          <!-- <i class="v-input__icon"
            v-if="validateState"
            :class="['v-input__validateIcon', validateIcon]">
          </i> -->
        </span>
        <!-- 后置元素 -->
        <div class="ac-input-group__append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
    </template>
     <textarea
      v-else
      class="ac-textarea__inner"
      v-model="model"
      :rows='row'
    >
    </textarea>
  </div>
</template>

<script>
import emitter from './emitter'
import migrating from './migrating.js'

export default {
  name: 'AcInput',
  data () {
    return {
      focus: false,
      hovering: false
    }
  },
  mixins: [emitter, migrating],
  props: {
    value: {},
    placeholder: String,
    disabled: Boolean,
    round: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    size: String,
    prefixIcon: String,
    suffixIcon: String,
    status: String,
    clearable: {
      type: Boolean,
      default: false
    },
    row: Number
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    showClear () {
      return this.clearable &&
        !this.disabled &&
        !this.readonly &&
        (this.focus || this.hovering)
    },
    statusIcon () {
      switch (this.status) {
        case 'success': return 'ac-icon-roundcheckfill'
        case 'error': return 'ac-icon-roundclosefill'
        case 'warning': return 'ac-icon-warningfill'
        case 'info': return 'ac-icon-infofill'
      }
    },
    statusColor () {
      switch (this.status) {
        case 'success': return { color: '#97c625' }
        case 'error': return { color: '#f56c6c' }
        case 'warning': return { color: '#e6a23c' }
        case 'info': return { color: '#909399' }
      }
    }
  },
  methods: {
    handleFocus (event) {
      this.focus = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      this.focus = false
      this.$emit('blur', event)
    },
    clear () {
      this.$emit('input', '')
    }
  }
}
</script>

<style>

</style>
