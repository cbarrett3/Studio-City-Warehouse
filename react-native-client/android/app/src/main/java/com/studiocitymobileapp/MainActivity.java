package com.studiocitymobileapp;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

   // WebView webView;
   // public static final String USER_AGENT = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {

   //  webView.getSettings().setUserAgentString(USER_AGENT);
    
    return "StudioCityMobileApp";
  }
}

