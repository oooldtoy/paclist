import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.tencent.qqlite',
  name: ' QQ极速版',
  groups: [
    {
      key: 1,
      name: '升级标题',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: 'com.tencent.mobileqq.activity.SplashActivity',
      rules: "com.tencent.qqlite:id/close_top_bar",
    },
  ],
});
