import IntroRoutes from "./Intro/IntroRoutes.js";
import JsxRoutes from "./Jsx/JsxRoutes.js";
import StylingRoutes from "./styling/StylingRoutes";
import ConditionalRenderingRoutes from "./conditional-rendering/ConditionalRenderingRoutes";
import HandlingEventsRoutes from "./HandlingEvents/HandlingEventsRoutes";
import ListRenderingRoutes from "./list-rendering/ListRenderingRoutes";
import ComponentRoutes from "./react-component/ComponentRoutes";
import StateRoutes from "./state/StateRoutes";
import PropsRoutes from "./props/PropsRoutes";
import FormRoutes from "./form-handling/FormRoutes";
import LifeCycleRuotes from "./life-cycle/LifeCycleRuotes";
import HooksRoutes from "./hooks/HooksRoutes";
import RefRoutes from "./Ref/RefRoutes";
import RoutingRoutes from "./Routing/RoutingRoutes";
import ApiRoutes from "./api/ApiRoutes";
import PortalsRoutes from "./portals/PortalsRoutes";
import ContextApiRoutes from "./context-api/ContextApiRoutes";
import ReduxRoutes from "./redux/ReduxRoutes";
import FormikRoutes from "./Formik/FormikRoutes";
const docsRoutes = [
    {
        title: "introduction and setup",
        path: "intro",
        component: () => <IntroRoutes />,
        list: [
            { name: "introduction", path: "introduction" },
            { name: "set-up", path: "set-up" },
            { name: "booting", path: "booting" },
        ],
    },
    {
        title: "jsx",
        path: "jsx",
        component: () => <JsxRoutes />,
        list: [
            { name: "what is jsx", path: "what-is-jsx" },
            { name: "Jsx Rules", path: "rules-of-jsx" },
            { name: "fragment", path: "fragment" },
        ],
    },
    {
        title: "styling",
        path: "styling",
        component: () => <StylingRoutes />,
        list: [
            { name: "style sheets", path: "style-sheets" },
            { name: "inline styles", path: "inline-styles" },
            { name: "css module", path: "css-module" },
            { name: "styled component", path: "styled-component" },
        ],
    },
    //componet
    {
        title: "components",
        path: "components",
        component: () => <ComponentRoutes />,
        list: [
            { name: "what is components", path: "what-is-components" },
            { name: "function component", path: "function-component" },
            { name: "class component", path: "class-component" },
            { name: "pure component", path: "pure-component" },
            { name: "controlled component", path: "controlled-component" },
            { name: "uncontrolled component", path: "uncontrolled-component" },
            { name: "high order component", path: "high-order-component" },
        ],
    },
    {
        title: "state",
        path: "state",
        component: () => <StateRoutes />,
        list: [
            {
                name: "what is state",
                path: "what-is-state",
            },
            {
                name: "state in function component",
                path: "state-in-function-component",
            },
            {
                name: "state in class component",
                path: "state-in-class-component",
            },
            {
                name: "previous state",
                path: "previous-state",
            },
            {
                name: "previous state with object",
                path: "previous-state-with-object",
            },
        ],
    },
    {
        title: "props",
        path: "props",
        component: () => <PropsRoutes />,
        list: [
            {
                name: "what is props",
                path: "what-is-props",
            },
            {
                name: "props in function component",
                path: "props-in-function-component",
            },
            {
                name: "props in class component",
                path: "props-in-class-component",
            },
            {
                name: "previous props",
                path: "previous-props",
            },
            {
                name: "props composition",
                path: "props-composition",
            },
        ],
    },
    {
        title: "Ref",
        path: "ref",
        component: () => <RefRoutes />,
        list: [
            { name: "what is ref", path: "what-is-ref" },
            { name: "forwardRef", path: "forwardRef" },
            { name: "useRef hook", path: "useRef-hook" },
        ],
    },
    {
        title: "conditional rendering",
        path: "conditional_rendering",
        component: () => <ConditionalRenderingRoutes />,
        list: [
            { name: "if-else", path: "if-else" },
            { name: "element-variables", path: "element-variables" },
            { name: "ternary-operator", path: "ternary-operator" },
            { name: "short circuit operator", path: "short-circuit-operator" },
        ],
    },
    {
        title: "event handling",
        path: "event_handling",
        component: () => <HandlingEventsRoutes />,
        list: [
            { name: "function component events", path: "function-component-events" },
            { name: "class component events", path: "class-component-events" },
        ],
    },
    {
        title: "list rendering",
        path: "list_rendering",
        component: () => <ListRenderingRoutes />,
        list: [
            { name: "what is list rendering", path: "what-is-list-rendering" },
            { name: "array list", path: "array-list" },
            { name: "array of objects list", path: "array-of-objects-list" },
            { name: "nested array list", path: "nested-array-list" },
        ],
    },

    {
        title: "life cycle method",
        path: "life_cycle_method",
        component: () => <LifeCycleRuotes />,
        list: [
            {
                name: "what is life cycle method",
                path: "what-is-life-cycle-method",
            },
            {
                name: "constructor",
                path: "constructor",
            },
            {
                name: "render method",
                path: "render-method",
            },
            {
                name: "componentDidMount",
                path: "component-did-mount",
            },
            {
                name: "componentDidUpdate",
                path: "component-did-update",
            },
            {
                name: "shouldComponentUpdate ",
                path: "should-component-update",
            },
            {
                name: "componentWillUnmount",
                path: "component-will-unmount",
            },
        ],
    },
    //form
    {
        title: "form handling",
        path: "form_handling",
        component: () => <FormRoutes />,
        list: [
            { name: "what is form handling", path: "what-is-form-handling" },
            { name: "BasicForm", path: "basic-form" },
            { name: "basic form validation", path: "basic-form-validation" },
        ],
    },
    {
        title: "hooks",
        path: "hooks",
        component: () => <HooksRoutes />,
        list: [
            { name: "what is hook", path: "what-is-hooks" },
            { name: "useState", path: "useState" },
            { name: "useEffect", path: "useEffect" },
            { name: "useMemo", path: "useMemo" },
            { name: "useReducer", path: "useReducer" },
            { name: "useRef", path: "useRef" },
            { name: "useContext", path: "useContext" },
            { name: "custom hooks", path: "custom-hooks" },
        ],
    },
    {
        title: "Context API",
        path: "context-api",
        component: () => <ContextApiRoutes />,
        list: [
            { name: "props drilling", path: "props-drilling" },
            { name: "what-is-context-api", path: "what-is-context-api" },
            { name: "how to use context api", path: "how-to-use-context-api" },
            { name: "useContext hook", path: "useContext-hook" },
        ],
    },
    //props & state
    {
        title: "routing",
        path: "routing",
        component: () => <RoutingRoutes />,
        list: [
            { name: "what is routing", path: "what-is-routing" },
            { name: "basic-routing", path: "basic-routing" },
            { name: "dynamic routing", path: "dynamic-routing" },
            { name: "routing hooks", path: "routing-hooks" },
        ],
        library: true,
    },
    {
        title: "fetch API",
        path: "fetch-api",
        component: () => <ApiRoutes />,
        list: [
            { name: "what is api", path: "what-is-api" },
            { name: "http curd", path: "http-curd" },
            { name: "curd code", path: "curd-code" },
        ],
    },
    {
        title: "portals",
        path: "portals",
        component: () => <PortalsRoutes />,
        list: [{ name: "what is portals", path: "what-is-portals" }],
    },
    {
        title: "redux",
        path: "redux",
        component: () => <ReduxRoutes />,
        list: [
            { name: "introduction", path: "introduction" },
            { name: "architecture", path: "architecture" },
            { name: "Principles", path: "principles" },
            { name: "redux set up", path: "redux-set-up" },
        ],
        library: true,
    },
    {
        title: "formik",
        path: "formik",
        component: () => <FormikRoutes />,
        list: [
            { name: "what is formik", path: "what-is-formik" },
            { name: "basic form", path: "basic-form" },
            { name: "form-validation", path: "form-validation" },
            { name: "formik component", path: "formik-component" },
        ],
        library: true,
    },
];
//
export { docsRoutes };
