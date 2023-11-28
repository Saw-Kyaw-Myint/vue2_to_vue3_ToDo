import VueI18n from "vue-i18n";
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import validationMessages from "vee-validate/dist/locale/en";

// Install required rule.
extend("required", required);

// Install email rule.
extend("email", email);

// Install min rule.
extend("min", min);

// Install English and Arabic localizations.
localize({
  en: {
    messages: en.messages,
    names: {
      email: "E-mail Address",
      password: "Password",
    },
    fields: {
      password: {
        min: "{_field_} is too short, you want to get hacked?",
      },
    },
  },
  mr: {
    messages: mr.messages,
    names: {
      email: "البريد الاليكتروني",
      password: "كلمة السر",
    },
    fields: {
      password: {
        min: "كلمة السر قصيرة جداً سيتم اختراقك",
      },
    },
  },
});

extend("positive", (value) => {
  if (value >= 0) {
    return true;
  }

  return "This field must be a positive number";
});

let LOCALE = "en";

// A simple get/set interface to manage our locale in components.
// This is not reactive, so don't create any computed properties/watchers off it.
Object.defineProperty(Vue.prototype, "locale", {
  get() {
    return LOCALE;
  },
  set(val) {
    LOCALE = val;
    localize(val);
  },
});
