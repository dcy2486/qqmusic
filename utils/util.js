function imgdata(callback){
  wx.request({
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: new Date().getTime()
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      //回调函数
      callback(res)
    }
  })
}

// 排行
function paihmath(callback) {
  wx.request({
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: new Date().getTime()
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      //回调函数
      callback(res.data)
    }
  })
}

function sousuo(callback){
  wx.request({
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format:' json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      _: new Date().getTime()
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      callback(res.data.data.hotkey.slice(0, 7))
    }
  })
}

function get_search(val,key,callback){
  wx.request({
    url: 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp', //仅为示例，并非真实的接口地址
    data: {
      g_tk: 5381,
      uin: 0,
      format:'json',
      inCharset: 'utf - 8',
      outCharset: 'utf - 8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1,
      w:val,
      zhidaqu: 1,
      catZhida: 1,
      t: 0,
      flag: 1,
      ie: 'utf - 8',
      sem: 1,
      aggr: 0,
      perpage: 20,
      n: 20,
      p: key,
      _: new Date().getTime()
    },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: function (res) {
      callback(res.data)
     
    }
  })
}

//获取歌词
function get_lyric(musicid,callback){
  wx.request({
    url: 'http://route.showapi.com/213-2', //仅为示例，并非真实的接口地址
    data: {
      musicid: musicid,
      showapi_appid: '23654',
      showapi_timestamp: new Date().getTime(),
      showapi_sign: 'd23793312daf46ad88a06294772b7aac',
      _: new Date().getTime()  //清除缓存  
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded' // 默认值
    },
    success: function (res) {
      callback(res.data.showapi_res_body.lyric)
    }
  })
}

module.exports={
  imgdata,
  paihmath,
  sousuo,
  get_search,
  get_lyric
}