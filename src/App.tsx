import * as tsx from 'vue-tsx-support'
import {VNode} from 'vue'
import {Adder} from './components/Adder'
import {Num} from '@/types/num'
import {Sign} from '@/types/sign'
import {IState} from '@/store'


const App = tsx.component({
    name: 'App',
    data() {
        return {
            line: '',
            result: 0
        }
    },

    computed: {

        line(): string {
            return (this.$store.state as IState).calculation.line
        },

    },

    methods: {
        changeLine(line: string) {
            this.$store.commit('calculation/line', line)
        },

        addToLine(sign: Sign, num: Num) {
            console.log(sign);
            console.log(num);
            if (sign == Sign["="]) {
                this.result = eval(this.line);
                this.line = eval(this.line);
            } else if (sign == Sign.C) {
                this.line = '';
                this.result = 0;
            } else if (sign != Sign.Null) {
                this.line += sign.toString();
                console.log(this.line);
            } else {
                this.line += num.toString();
            }

        },
    },

    render(): VNode {
        return (
            <Adder
                onChangeSign={this.addToLine}
            >
                <div slot='result'>   {this.result}=</div>
                <div slot='line'> {this.line} </div>
            </Adder>
        )
    }
})

export {App}
