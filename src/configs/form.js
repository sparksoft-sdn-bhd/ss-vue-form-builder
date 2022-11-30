/**
 * Form-Configuration for Vue-Form-Builder
 * @author Phat Tran
 */

const FORM_DEFAULT_DATA = {
    headline: "Survey Form Title",
    subHeadline: "We would love to hear your thoughts or feedback on how we can improve your experience!",
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
