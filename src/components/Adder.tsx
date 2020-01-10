import * as tsx from 'vue-tsx-support'
import { VNode } from 'vue'

import { Sign } from '@/types/sign'
import { Num } from '@/types/num'
import './adder.css'

interface IEvents {
  onChangeSign: (sign: Sign) => void
}

interface IAdderData {
  signs: Sign[]
  nums: Num[];
}

const Adder = tsx.componentFactoryOf<IEvents>().create({
  name: 'Adder',

  props: {
    selectedSign: {
      type: String as () => Sign,
      required: true as true
    },

    selectedNum: {
      type: Number as () => Num,
      required: true as true

    },

    left: {
      type: Number,
      required: true as true
    },

    right: {
      type: Number,
      required: true as true
    }
  },

  data(): IAdderData {
    return {
      signs: [
        Sign["+"],
        Sign["-"],
        Sign["x"],
        Sign["/"]
      ],
      nums:[
        Num["Zero"],
        Num["One"],
        Num["Two"],
        Num["Three"],
        Num["Four"],
        Num["Five"],
        Num["Six"],
        Num["Seven"],
        Num["Eight"],
        Num["Nine"]
      ]
    }
  },

  render(): VNode {
    const {nums, signs, left, right, selectedSign, selectedNum } = this

    return (
      <div class='wrapper'>
        <div class='inner'>
          <div class='number'>
            {left}
          </div>
          <div class='number'>
            {nums.map(num =>
                <span
                    class={num === selectedNum ? 'selected sign' : 'sign'}
                    onclick={() => this.$emit('changeSign', num)}
                >
                {num}
              </span>)
            }
          </div>
          <div class='signs'>
            {signs.map(sign =>
              <span
                class={sign === selectedSign ? 'selected sign' : 'sign'}
                onClick={() => this.$emit('changeSign', sign)}
              >
                {sign}
              </span>)
            }
          </div>

          <div class='number'>
            {right}
          </div>
        </div>

        <div class='result'>
          <span>
            Result: {this.$slots.result}
          </span>
        </div>
      </div>
    )
  }
})

export { Adder }
