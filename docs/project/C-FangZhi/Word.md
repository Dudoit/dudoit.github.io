
## 域名

material.xxxx.com 资料讲义

assets.xxx.com 图片/图标/字体文件


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
  COALESCE(wr.watch_duration, 0) AS watchDuration,
  CASE
    WHEN wr.updated_at = (
      SELECT MAX(wr2.updated_at)
      FROM watch_lesson_records AS wr2
      WHERE wr2.student_id = wr.student_id
      AND wr2.chapter_id = li.chapter_id
    ) THEN true
    ELSE false
  END AS recently,
  wr.completed
FROM
  lesson_info AS li
LEFT JOIN
  watch_lesson_records AS wr ON li.lesson_id = wr.lesson_id
  AND wr.student_id = {student_id}  -- 填写学生ID
WHERE
  li.course_id = {course_id}  -- 填写课程ID
ORDER BY
  li.chapter_id, li.sort;
```
