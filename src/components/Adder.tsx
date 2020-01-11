import * as tsx from 'vue-tsx-support'
import {VNode} from 'vue'
import {IState} from '@/store'
import {Sign} from '@/types/sign'
import {Num} from '@/types/num'
import './adder.css'

interface IEvents {
    onChangeSign: (sign: Sign, num: Num) => void

}

interface IAdderData {
    signs: Sign[]
    nums: Num[];
}

const Adder = tsx.componentFactoryOf<IEvents>().create({
    name: 'Adder',

    props: {},

    data(): IAdderData {
        return {
            signs: [
                Sign ["C"],
                Sign["+"],
                Sign["-"],
                Sign["="],
            ],
            nums: [
                Num["Seven"], Num["Eight"], Num["Nine"],
                Num["Four"], Num["Five"], Num["Six"],
                Num["One"], Num["Two"], Num["Three"],
                Num["Zero"],

            ]
        }
    },
    computed: {
        add_list() {
            return this.$store.getters.ADD_LINE
        },
        add_result() {
            return this.$store.getters.ADD_RESULT
        }
    },

    render(): VNode {
        const {nums, signs} = this

        return (
            <div class='wrapper'>
                <div class='inner'>
                    <div class='line'>
          <span class='row'>
            {this.$slots.line}
          </span>
                    </div>
                    <div class='result'>
          <span>
            {this.$slots.result}
          </span>
                    </div>
                </div>
                <div class='display'>
                    <div class='numbers'>
                        {nums.map(num =>
                            <span
                                class={"num"}
                                onClick={() => this.$emit('changeSign', Sign.Null, num)}
                            >
                {num}
              </span>)
                        }
                    </div>
                    <div class='signs'>
                        {signs.map(sign =>
                            <span
                                class={"sign"}
                                onClick={() => this.$emit('changeSign', sign, Num.Null)}
                            >
                {sign}
              </span>)
                        }
                    </div>
                </div>
            </div>
        )
    }
})

export {Adder}
