import { Vue } from "vue-property-decorator";
import type { VNode } from "vue";
export default class TestComponent extends Vue {

    public render(): VNode {
        return (
            <div>
                <i class="good self closing i tag" />
                {/* eslint-disable-next-line react/self-closing-comp */}
                <i class="bad non self closing i tag"></i>
            </div>
        );
    }
}
