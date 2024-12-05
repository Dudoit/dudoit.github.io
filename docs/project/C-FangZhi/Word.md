
## 域名

material.xxxx.com 资料讲义

assets.xxx.com 图片/图标/字体文件

link.xxx.com 外部链接

## 获取课时列表

数据格式
```JSON
[
  {
    "lessonId": 1101,
    "lessonName": "教育及其产生与发展",
    "cover": "https://files.zhuokao360.com/images/course/baitong_45_pc.png",
    "vid": "206054f91a3571ef90386633b79f0102",
    "duration": 3162,
    "watchDuration": 1533,
    "recently": false,
    "completed": true
  },
]
```

```SQL
CREATE TABLE watch_lesson_records (
  record_id         INT AUTO_INCREMENT PRIMARY KEY  COMMENT '课时观看记录唯一标识符',
  student_id        INT                             COMMENT '学生ID',
  course_id         INT                             COMMENT '课程ID',
  chapter_id        INT                             COMMENT '章节ID',
  lesson_id         INT                             COMMENT '课时ID',
  watch_duration    INT                             COMMENT '观看时长',
  completed         TINYINT(1) DEFAULT 0            COMMENT '是否观看完成',
  watched_record    JSON                            COMMENT '学习时间',
  updated_at        DATETIME                        COMMENT '最后一次学习时间',
  INDEX (student_id, course_id, chapter_id, lesson_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课时_观看记录表';

CREATE TABLE lesson_info (
  lesson_id       INT AUTO_INCREMENT PRIMARY KEY  COMMENT '课时唯一标识符，自增',
  lesson_name     VARCHAR(255) NOT NULL           COMMENT '课时名称，不能为空',
  vid             VARCHAR(150)                    COMMENT '阿里云视频ID',
  cover           VARCHAR(255)                    COMMENT '视频封面',
  video_duration  INT                             COMMENT '视频时长（秒）',
  course_id       INT                             COMMENT '所属课程ID，关联课程信息表',
  chapter_id      INT                             COMMENT '所属章节ID，关联章节信息表',
  status          TINYINT(1) DEFAULT 1            COMMENT '课时状态：1=正常，0=停用，默认值为1',
  remark          VARCHAR(50)                     COMMENT '备注',
  sort            INT DEFAULT 0                   COMMENT '排序，默认值为0',
  created_at      DATETIME                        COMMENT '创建时间',
  updated_at      DATETIME                        COMMENT '更新时间',
  created_by      INT NOT NULL                    COMMENT '创建者，非空',
  updated_by      INT                             COMMENT '更新者',
  FOREIGN KEY (course_id) REFERENCES course_info(course_id),
  FOREIGN KEY (chapter_id) REFERENCES chapter_info(chapter_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课时信息表';
```

```SQL
SELECT
  li.lesson_id AS lessonId,
  li.lesson_name AS lessonName,
  li.cover,
  li.vid,
  li.video_duration AS duration,
  COALESCE(wlr.watch_duration, 0) AS watchDuration,
  CASE
    WHEN wlr.updated_at = (
      SELECT MAX(wlr2.updated_at)
      FROM watch_lesson_records AS wlr2
      WHERE wlr2.student_id = wlr.student_id
      AND wlr2.chapter_id = li.chapter_id
    ) THEN true
    ELSE false
  END AS recently,
  wlr.completed
FROM
   b_fangzhi.lesson_info AS li
LEFT JOIN
  c_fangzhi.watch_lesson_records AS wlr ON li.lesson_id = wlr.lesson_id
  AND wlr.student_id = {student_id}
WHERE
  li.chapter_id = {chapter_id}
ORDER BY
  li.chapter_id, li.sort;
```

```
Platfrom-Tag
平台类型：WEB、APP
平台版本：Version(1.0.0)
示例：WEB | 1.0.2

Device-Tag
设备类型：PC、PHONE、PAD
设备系统：IOS
设备型号：iPhone13(15.5)
示例：PC | IOS | MacBookAir(16.0)

{
  PC: "",
  PHONE: "",
  PAD: ""
}
```

## 用户登录逻辑

1. 验证手机号有效性
2. 通过 code 判断登录方式密码或验证码登录

```
-> 密码登录

1. 是否存在账号。没有，返回该账号未注册。有，则向下
2. 验证账号状态是否正常，处于未注销或停用状态。未注销或停用，向下。
3. 验证密码正确
4. 判断登录日志
    如果和上次登录的IP不同，记录为一次敏感账号日志。
    如果当日登录数超过3次，记录为一次敏感账号日志。
    超过5次，停用账号（预防爆破登录）。
5. 记录当前登录日志
5. 返回用户数据
```

```
-> 验证码登录

1. 是否存在账号。没有，注册账号。有，则向下
2. 验证账号状态是否正常，处于未注销状态。未注销，向下。
3. 验证验证码正确
4. 获取设备类型及登录日志，判断账号异常
    如果和上次登录的IP不同，记录为一次敏感账号日志。
    如果当日登录数超过3次，记录为一次敏感账号日志。
    超过5次，停用账号（预防爆破登录）。
5. 记录当前登录日志
5. 返回用户数据
```

## 账号注销逻辑

1. C端和B端账号状态置为0
2. 清除Redis中Token数据


数据格式
```JSON
[
  {
    examsType: 1
    examsTypeStr: "章节练习"
    examsList: [
      {
        examId: 1,
        examTitle: "",
        questionCount: 55,
        answerQuestionCount: 16,
      }
    ]
  }
]
```