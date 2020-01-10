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
        Sign ["C"],
        Sign["+"],
        Sign["-"],
        Sign["="]
      ],
      nums:[
        Num["Seven"], Num["Eight"], Num["Nine"],
        Num["Four"], Num["Five"],Num["Six"],
        Num["One"], Num["Two"], Num["Three"],
        Num["Zero"],

      ]
    }
  },

  render(): VNode {
    const {nums, signs, left, right, selectedSign, selectedNum } = this

    return (
      <div class='wrapper'>
        <div class='inner'>
          <div class='display'>
          <div class='numbers'>
            {nums.map(num =>
                <span
                    class={num === selectedNum ? 'selected num' : 'num'}
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
