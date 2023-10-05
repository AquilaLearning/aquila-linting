import { Vue } from "vue-property-decorator";
import type { VNode } from "vue";

export default class TestComponent extends Vue {

    public render(): VNode {
        return (
            <div>
                <i class="good self closing i tag" />
                {/* eslint-disable-next-line react/self-closing-comp */}
                <i class="bad non self closing i tag"></i>

                <good-comp-many-props
                    foo="abc"
                    bar="def"
                    fizz="ghi"
                />

                {/* eslint-disable-next-line react/jsx-max-props-per-line */}
                <bad-comp-many-props foo="abc" bar="def" fizz="ghi" />
            </div>
        );
    }
}
