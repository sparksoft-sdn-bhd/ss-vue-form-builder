/**
 * Form-Configuration for Vue-Form-Builder
 * @author Phat Tran
 */

const FORM_DEFAULT_DATA = {
    headline: "",
    subHeadline: "",
    isShowHeadline: true,

    // <form></form> tag ??
    renderFormTag: false,
    formActionURL: "",
    formMethod: "POST",

    // Server-Side validation
    enableServerSideValidation: false,
    serverSideValidationEndpoint: ""
};

export {
    FORM_DEFAULT_DATA
}
