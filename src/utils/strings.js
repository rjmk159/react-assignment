const LocalizedStrings = {
  en: {
    // English
  },
  gn: {
    //
    HeaderText: "BrowserStack",
    SearchPlaceHolder:"Place",
    NearMe:"Near me",
    SearchCtaText:'Search'
  }
};

const setLanguage = function(languageCode) {
  return LocalizedStrings[languageCode];
};

export const strings = setLanguage("gn");
