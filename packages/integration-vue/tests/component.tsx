/* oxlint-disable no-unused-vars */
import { Vue } from "vue-property-decorator";
import type { VNode } from "vue";

export default class TestComponent extends Vue {

    public render(): VNode {

        const goodDeclaration = (
            <div />
        );

        const goodSingleLineDeclaration = <div />;

        // eslint-disable-next-line react/jsx-wrap-multilines
        const badDeclaration = <div>
            Hello world
        </div>;

        // eslint-disable-next-line react/jsx-wrap-multilines
        const badDeclarationParens = (<div>
            Hello world
        </div>);

        return (
            <div>
                <i class="good self closing i tag" />
                {/* eslint-disable-next-line react/self-closing-comp */}
                <i class="bad non self closing i tag"></i>

                <good-comp-many-props
                    bar="def"
                    fizz="ghi"
                    foo="abc"
                    true
                    onSomething={() => undefined}
                />

                <bad-prop-order
                    bar="def"
                    // eslint-disable-next-line react/jsx-sort-props
                    onSomething={() => undefined}
                    true
                    foo="abc"
                    fizz="ghi"
                />

                {/* eslint-disable-next-line react/jsx-max-props-per-line */}
                <bad-comp-many-props foo="abc" bar="def" fizz="ghi" />

                {/* eslint-disable-next-line react/jsx-first-prop-new-line */}
                <bad-comp-partial-split foo="abc"
                    bar="def"
                />

                {true && (
                    <div>
                        good-wrapped-comp
                    </div>
                )}

                {/* eslint-disable-next-line react/jsx-wrap-multilines */}
                {false && <div>
                    Bad wrapped component
                </div>}

                <bad-closing-bracket
                    foo="bar"
                    // eslint-disable-next-line react/jsx-closing-bracket-location
                    fizz="buzz">
                    Bad closing bracket
                </bad-closing-bracket>

                <bad-self-closing-bracket
                    foo="bar"
                    // eslint-disable-next-line react/jsx-closing-bracket-location
                    fizz="buzz" />

            </div>
        );
    }
}
