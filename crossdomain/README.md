# 什么是跨域
1: 协议    protocol:http,https
2: 域名    domain
3: 端口号  port

# 注意事项
1：如果是协议和端口造成的跨域问题“前台”是无能为力的，
2：在跨域问题上，域仅仅是通过“URL的首部”来识别而不会去尝试判断相同的ip地址对应着两个域或两个域是否在同一个ip上。
“URL的首部”指window.location.protocol +window.location.host，也可以理解为“Domains, protocols and ports must match”。
