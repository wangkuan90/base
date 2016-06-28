require.resolve   
查询模块的路径

require.cache
{}  key value   键值对

delete require.cache[require.resolve("./global.js")];
删除之后可以重新加载

