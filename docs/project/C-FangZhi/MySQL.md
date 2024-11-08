表名：学生信息表（前台）
字段信息：
学生唯一标识符
手机号
用户名
头像
密码
主要课程
课程权限
登录设备信息
状态，正常1，停用0
创建时间
更新时间
```SQL
CREATE TABLE student_c_info (
  student_id      INT AUTO_INCREMENT PRIMARY KEY  COMMENT '学生唯一标识符，自增',
  phone           CHAR(11) UNIQUE NOT NULL        COMMENT '手机号',
  username        VARCHAR(50) NOT NULL            COMMENT '用户名',
  avatar          VARCHAR(255)                    COMMENT '头像URL',
  password        VARCHAR(255) NOT NULL           COMMENT '加密存储的密码',
  main_course     INT                             COMMENT '主要课程ID',
  permissions     JSON                            COMMENT '课程权限，以JSON格式存储',
  devices         JSON                            COMMENT '登录设备信息，以JSON格式存储',
  status          TINYINT(1) DEFAULT 1            COMMENT '状态：1=正常，0=停用，2=注销',
  created_at      DATETIME                        COMMENT '创建时间',
  updated_at      DATETIME                        COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生信息表（前台）';

-- 根据手机号查询学生信息
SELECT * FROM student_c_info WHERE phone = '1234567890';

-- 插入
INSERT INTO student_c_info (
  phone, username, avatar_url, password, main_course_id, course_permissions, login_device_info, status
) VALUES (
  '1234567890', 'JohnDoe', 'https://example.com/avatar.jpg', '$2a$10$examplehashedpassword', 101, 
  '{"courses": ["course1", "course2"]}', '{"device": "iPhone 13"}', 1
);

-- 更新
UPDATE student_c_info 
SET username = 'JaneDoe', avatar_url = 'https://example.com/new_avatar.jpg', updated_at = CURRENT_TIMESTAMP
WHERE student_id = 1;

-- 修改头像
UPDATE student_c_info 
SET avatar = 'https://example.com/new_avatar.jpg'
WHERE student_id = 1;

UPDATE student_c_info 
SET password = 'mplehashedpassword'
WHERE student_id = 1;

-- 软删除
UPDATE student_c_info 
SET status = 2, updated_at = CURRENT_TIMESTAMP 
WHERE student_id = 1;


```

表名：登录日志表
字段信息：
日志唯一标识符
学生ID
手机号
IP地址
设备端：1=APP，2=WEB
版本号
设备信息
当日登录次数
创建时间



表名：试题_错题表
字段信息：
试题收藏唯一标识符
学生ID
试题ID
试题所属试卷ID
试题所属课程
创建时间
```SQL
CREATE TABLE question_wrong_record (
  record_id       INT AUTO_INCREMENT PRIMARY KEY  COMMENT '错题记录唯一标识符',
  student_id      INT NOT NULL                    COMMENT '学生唯一标识符，关联学生信息表',
  question_id     INT NOT NULL                    COMMENT '试题ID',
  exam_id         INT NOT NULL                    COMMENT '归属试卷',
  course_id       INT NOT NULL                    COMMENT '归属课程',
  answer_given    JSON                            COMMENT '学生提交的答案',
  correct_answer  JSON                            COMMENT '正确答案',
  created_at      DATETIME                        COMMENT '创建时间',
  reviewed        TINYINT(1) DEFAULT 0            COMMENT '是否已复习：0=未复习，1=已复习',
  FOREIGN KEY (student_id) REFERENCES student_frontend_info(student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试题_错题表';


```


表名：试题_收藏表
字段信息：
试题收藏唯一标识符
学生ID
试题ID
试题所属试卷ID
试题所属课程
创建时间
```SQL
CREATE TABLE question_collect_record (
  collect_id    INT AUTO_INCREMENT PRIMARY KEY  COMMENT '收藏记录唯一标识符',
  student_id    INT NOT NULL                    COMMENT '学生唯一标识符，关联学生信息表',
  question_id   INT NOT NULL                    COMMENT '试题ID',
  exam_id       INT NOT NULL                    COMMENT '归属试卷',
  course_id     INT NOT NULL                    COMMENT '归属课程',
  created_at    DATETIME                        COMMENT '创建时间',
  FOREIGN KEY (student_id) REFERENCES student_c_info(student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试题_收藏表';

```

请你以学生信息表（前台）写一下相关的查询，新增，更新，删除操作语句吧