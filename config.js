module.exports = {
  "title": "Matrix 系统状态",
  "name": "matrix",
  "description": "",
  "baseUrl": "https://status.vmatrix.org.cn",
  "defaultLocale": "zh-cn",
  "locales": [
    {
      "code": "zh-cn",
      "iso": "zh-CN",
      "name": "中文",
      "file": "zh.json"
    }
  ],
  "content": {
    "frontMatterFormat": "yaml",
    "systems": [
      "gateway",
      "backend",
      "judge",
      "seaweedfs"
    ]
  },
  "notification": {
    "icalendar": false
  },
  "theme": {
    "links": {
      "zh-cn": {
        "home": "https://vmatrix.org.cn"
      }
    }
  }
}