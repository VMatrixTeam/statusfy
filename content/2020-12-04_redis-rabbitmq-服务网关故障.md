---
title: Redis, RabbitMQ, 服务网关故障
date: 2020-12-03T23:46:32.722Z
severity: major-outage
affectedsystems:
  - gateway
  - backend
  - judge
resolved: true
scheduled: ""
---
我们接到系统报警，一台承载 Redis 与 RabbitMQ 的服务器宕机，服务网关受到部分影响。

::: update Investigating | 2020-12-04T01:45:00.000Z
我们收到用户关于此次故障的反馈，并正在调查该问题。
:::

::: update Monitoring | 2020-12-04T02:02:00.000Z
我们重新启动了宕机的服务器，用户应已可以正常登录。我们仍在观察评测队列与服务网关的恢复情况。
:::

::: update Resolved | 2020-12-04T02:46:00.000Z
故障已解决。
:::