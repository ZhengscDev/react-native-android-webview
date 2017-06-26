package com.zsc;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.RCTEventEmitter;

/**
 *
 * Created by zhengshichao1 on 2017/3/21.
 */

public class ShouldStartLoadWithRequestEvent extends Event<ShouldStartLoadWithRequestEvent>{

    public static final String EVENT_NAME = "shouldStartLoadWithRequestEvent";

    private String mTitle;
    private boolean mIsLoading;
    private String mUrl;
    private boolean mCanGoBack;
    private boolean mCanGoForward;
    private String mInjectInterceptValue;

    public ShouldStartLoadWithRequestEvent(int viewTag, String mTitle, boolean mIsLoading, String mUrl, boolean mCanGoBack, boolean mCanGoForward) {
        super(viewTag);
        this.mTitle = mTitle;
        this.mIsLoading = mIsLoading;
        this.mUrl = mUrl;
        this.mCanGoBack = mCanGoBack;
        this.mCanGoForward = mCanGoForward;
    }

    public ShouldStartLoadWithRequestEvent(int viewTag, String mTitle, boolean mIsLoading, String mUrl, boolean mCanGoBack, boolean mCanGoForward, String mInjectInterceptValue) {
        super(viewTag);
        this.mTitle = mTitle;
        this.mIsLoading = mIsLoading;
        this.mUrl = mUrl;
        this.mCanGoBack = mCanGoBack;
        this.mCanGoForward = mCanGoForward;
        this.mInjectInterceptValue = mInjectInterceptValue;
    }

    public void setInjectInterceptValue(String mInjectInterceptValue) {
        this.mInjectInterceptValue = mInjectInterceptValue;
    }

    @Override
    public String getEventName() {
        return EVENT_NAME;
    }

    @Override
    public void dispatch(RCTEventEmitter rctEventEmitter) {
        rctEventEmitter.receiveEvent(getViewTag(),getEventName(),serializeEventData());
    }

    private WritableMap serializeEventData() {
        WritableMap eventData = Arguments.createMap();
        eventData.putString("title", mTitle);
        eventData.putBoolean("loading", mIsLoading);
        eventData.putString("url", mUrl);
        eventData.putBoolean("canGoBack", mCanGoBack);
        eventData.putBoolean("canGoForward", mCanGoForward);
        eventData.putString("injectInterceptValue", mInjectInterceptValue);

        return eventData;
    }
}
