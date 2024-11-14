表名：管理员信息表
字段信息：
管理员唯一标识符
用户名
昵称
头像
手机号
性别
部门
职位
状态，正常1，停用0
备注
创建时间
更新时间
创建者
更新者

```SQL
-- 管理员信息表
CREATE TABLE admin_info (
  admin_id        INT AUTO_INCREMENT PRIMARY KEY COMMENT '管理员唯一标识符，自增',
  username        VARCHAR(50) NOT NULL           COMMENT '用户名，非空',
  nickname        VARCHAR(50)                    COMMENT '昵称，非空',
  avatar          VARCHAR(255)                   COMMENT '头像URL',
  phone           CHAR(11) NOT NULL UNIQUE       COMMENT '手机号，唯一，非空',
  password        VARCHAR(255) NOT NULL          COMMENT '密码，存储加密后的密码',
  gender          CHAR(1)                        COMMENT '性别：M=男, F=女, O=其他',
  department_id   INT                            COMMENT '部门ID',
  position_id     INT                            COMMENT '职位ID',
  status          TINYINT(1) DEFAULT 1           COMMENT '状态：1=正常，0=停用，默认值为1',
  remark          VARCHAR(50)                    COMMENT '备注',
  created_at      DATETIME                       COMMENT '创建时间',
  updated_at      DATETIME                       COMMENT '更新时间',
  created_by      INT NOT NULL                   COMMENT '创建者，非空',
  updated_by      INT                            COMMENT '更新者'
  -- FOREIGN KEY (department_id) REFERENCES department_info(department_id) COMMENT '外键，关联部门信息表',
  -- FOREIGN KEY (position_id) REFERENCES position_info(position_id) COMMENT '外键，关联职位信息表'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='管理员信息表';

-- 插入
INSERT INTO admin_info (username, nickname, avatar, phone, password, gender, department_id, position_id, status, remark, created_at, updated_at, created_by, updated_by)
VALUES ('johndoe', 'John Doe', 'http://example.com/avatar.jpg', '13812345678', 'hashed_password_example', 'M', 1, 2, 1, '', NOW(), NOW(), 1, NULL);

-- 更新
UPDATE admin_info
SET nickname = 'John Updated', status = 0, updated_at = NOW(), updated_by = 1
WHERE admin_id = 1;

UPDATE admin_info
SET avatar = 'http://example.com/new_avatar.jpg', gender = 'O', remark = 'Updated profile'
WHERE admin_id = 2;

-- 删除
DELETE FROM admin_info
WHERE admin_id = 3;
```

表名：团队信息表
字段信息：
团队唯一标识符
团队名
团队类型
头像
负责人ID（管理员）
负责品牌的数量
状态，正常1，停用0
备注
创建时间
更新时间
创建者
更新者

```SQL
-- 团队信息表
CREATE TABLE team_info (
  team_id          INT AUTO_INCREMENT PRIMARY KEY   COMMENT '团队唯一标识符，自增',
  team_name        VARCHAR(100) NOT NULL            COMMENT '团队名称，不为空',
  team_type        TINYINT NOT NULL                 COMMENT '团队类型，不为空',
  avatar           VARCHAR(255)                     COMMENT '头像URL',
  leader_id        INT                              COMMENT '负责人ID，关联管理员表',
  status           TINYINT(1) DEFAULT 1             COMMENT '状态：1=正常，0=停用，默认值为1',
  remark           TEXT                             COMMENT '备注',
  created_at       DATETIME                         COMMENT '创建时间',
  updated_at       DATETIME                         COMMENT '更新时间',
  created_by      INT NOT NULL                      COMMENT '创建者，非空',
  updated_by      INT                               COMMENT '更新者',
  FOREIGN KEY (leader_id) REFERENCES admin_info(admin_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='团队信息表';

-- 查询团队ID为1负责的品牌
SELECT b.brand_name
FROM team_info t
JOIN brand_info b ON t.team_id = b.team_id
WHERE t.team_id = 1;

-- 插入
INSERT INTO team_info (team_name, team_type, avatar, leader_id, status, remark, created_at, updated_at, created_by, updated_by)
VALUES ('开发团队', '技术', 'http://example.com/team_avatar.jpg', 1, 1, '负责公司产品的开发和维护', NOW(), NOW(), 1, NULL);

-- 更新
UPDATE team_info
SET team_name = '技术研发团队', team_type = '技术', avatar = 'http://example.com/new_avatar.jpg', updated_at = NOW(), updated_by = 1
WHERE team_id = 1;

UPDATE team_info
SET status = 0, updated_at = NOW(), updated_by = 1
WHERE team_id = 2;

-- 删除
DELETE FROM team_info
WHERE team_id = 3;

```

表名：品牌信息表
字段信息：
团队唯一标识符
团队名
团队类型
头像
负责人ID（管理员）
负责品牌的数量
状态，正常1，停用0
备注
创建时间
更新时间
创建者
更新者

```SQL
-- 品牌信息表
CREATE TABLE brand_info (
  brand_id     INT AUTO_INCREMENT PRIMARY KEY   COMMENT '品牌唯一标识符，自增',
  brand_name   VARCHAR(100) NOT NULL            COMMENT '品牌名称，非空',
  team_id      INT                              COMMENT '团队ID，关联团队信息表',
  remark       VARCHAR(100)                     COMMENT '备注',
  created_at   DATETIME                         COMMENT '创建时间',
  updated_at   DATETIME                         COMMENT '更新时间',
  created_by   INT NOT NULL                     COMMENT '创建者，非空',
  updated_by   INT                              COMMENT '更新者',
  FOREIGN KEY (team_id) REFERENCES team_info(team_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='品牌信息表';
```

```SQL

-- 课程信息表
CREATE TABLE course_info (
  course_id      INT AUTO_INCREMENT PRIMARY KEY  COMMENT '课程唯一标识符，自增',
  course_name    VARCHAR(100) NOT NULL           COMMENT '课程名称，非空',
  description    VARCHAR(150)                    COMMENT '课程描述',
  cover          VARCHAR(255)                    COMMENT '课程封面URL',
  year           SMALLINT UNSIGNED NOT NULL      COMMENT '课程年份，非空',
  chapter_count  INT DEFAULT 0                   COMMENT '章节数，默认值为0',
  status         TINYINT(1) DEFAULT 1            COMMENT '状态：1=正常，0=停用，默认值为1',
  sort           INT DEFAULT 0                   COMMENT '排序，默认值为0',
  remark         VARCHAR(100)                    COMMENT '备注',
  created_at     DATETIME                        COMMENT '创建时间',
  updated_at     DATETIME                        COMMENT '更新时间',
  created_by     INT NOT NULL                    COMMENT '创建者，非空',
  updated_by     INT                             COMMENT '更新者'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='课程信息表';
```

```SQL

-- 品牌与课程关联表
CREATE TABLE brand_course_relation (
  brand_id     INT    COMMENT '品牌ID，关联品牌信息表',
  course_id    INT    COMMENT '课程ID，关联课程信息表',
  PRIMARY KEY (brand_id, course_id),
  FOREIGN KEY (brand_id) REFERENCES brand_info(brand_id),
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='品牌与课程关联表';
```

表名：章节表
字段信息：
章节唯一标识符
章节名
课时数
年份
所属课程
状态，正常1，停用01
备注
排序
创建时间
更新时间
创建者
更新者

表名：课时表
字段信息：
课时唯一标识符
课时名
视频ID
视频时长
所属课程
所属章节
状态，正常1，停用01
备注
排序
创建时间
更新时间
创建者
更新者

```SQL
CREATE TABLE chapter_info (
  chapter_id     INT AUTO_INCREMENT PRIMARY KEY  COMMENT '章节唯一标识符，自增',
  chapter_name   VARCHAR(255) NOT NULL           COMMENT '章节名称，不能为空',
  lesson_count   INT DEFAULT 0                   COMMENT '课时数，默认值为0',
  year           INT UNSIGNED                    COMMENT '章节所属年份，非负整数',
  course_id      INT                             COMMENT '所属课程ID，关联课程信息表',
  status         TINYINT(1) DEFAULT 1            COMMENT '章节状态：1=正常，0=停用，默认值为1',
  remark         VARCHAR(50)                     COMMENT '备注',
  sort           INT DEFAULT 0                   COMMENT '排序，默认值为0',
  created_at     DATETIME                        COMMENT '创建时间',
  updated_at     DATETIME                        COMMENT '更新时间',
  created_by     INT NOT NULL                    COMMENT '创建者，非空',
  updated_by     INT                             COMMENT '更新者',
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='章节信息表';
```

```SQL
CREATE TABLE lesson_info (
  lesson_id       INT AUTO_INCREMENT PRIMARY KEY  COMMENT '课时唯一标识符，自增',
  lesson_name     VARCHAR(255) NOT NULL           COMMENT '课时名称，不能为空',
  vid             VARCHAR(150)                    COMMENT '阿里云视频ID',
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


表名：讲义资料表
字段信息：
讲义唯一标识符
讲义名1
讲义地址1
格式1
大小1
年份1
所属课程1
状态，正常1，停用01
备注1
排序
创建时间
更新时间
创建者
更新者
```SQL

-- 讲义资料表
CREATE TABLE handout_info (
  handout_id     INT AUTO_INCREMENT PRIMARY KEY   COMMENT '讲义唯一标识符，自增',
  handout_name   VARCHAR(150) NOT NULL            COMMENT '讲义名称，非空',
  handout_url    VARCHAR(255) NOT NULL            COMMENT '讲义文件存放地址或URL，非空',
  file_format    VARCHAR(20)                      COMMENT '讲义文件格式（如PDF、PPT、Word等）',
  file_size      INT UNSIGNED                     COMMENT '讲义文件大小（字节）',
  year           SMALLINT UNSIGNED                COMMENT '年份',
  course_id      INT                              COMMENT '所属课程ID',
  status         TINYINT(1) DEFAULT 1             COMMENT '状态：1=正常，0=停用，默认值为1',
  remark         VARCHAR(50)                      COMMENT '备注',
  sort           INT DEFAULT 0                    COMMENT '排序，默认值为0',
  created_at     DATETIME                         COMMENT '创建时间',
  updated_at     DATETIME                         COMMENT '更新时间',
  created_by     INT NOT NULL                     COMMENT '创建者，非空',
  updated_by     INT                              COMMENT '更新者',
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='讲义资料表';

-- 查询某个课程的所有讲义
SELECT h.handout_name, h.handout_url, h.file_size, h.file_format, h.year
FROM handout_info h
WHERE h.course_id = 1 AND h.status = 1  -- 查询课程ID为1，且状态为正常的讲义
ORDER BY h.sort_order ASC;  -- 按排序字段排序

-- 查询某个讲义的详细信息
SELECT * 
FROM handout_info
WHERE handout_id = 1;  -- 查询讲义ID为1的详细信息

-- 查询某个年份的所有讲义：
SELECT handout_name, handout_url
FROM handout_info
WHERE year = 2024;  -- 查询2024年发布的所有讲义


-- 新增讲义 (INSERT)
INSERT INTO handout_info (
  handout_name, 
  handout_url, 
  file_format, 
  file_size, 
  year, 
  course_id, 
  status, 
  remark, 
  sort_order, 
  created_by, 
  updated_by
) 
VALUES (
  '基础课程讲义',  -- 讲义名称
  'http://example.com/handouts/basic_course.pdf',  -- 讲义地址（URL）
  'PDF',  -- 文件格式
  204800,  -- 文件大小（字节）
  2024,  -- 所属年份
  1,  -- 所属课程ID，假设课程ID为1
  1,  -- 状态：1 表示正常
  '这是一个基础课程的讲义。',  -- 备注
  1,  -- 排序字段，设置为1
  'admin',  -- 创建者，假设为 'admin'
  'admin'  -- 更新者，初始时和创建者相同
);

-- 更新讲义 (UPDATE)
UPDATE handout_info
SET 
  handout_name = '高级课程讲义',  -- 更新讲义名称
  handout_url = 'http://example.com/handouts/advanced_course.pdf',  -- 更新讲义地址
  file_format = 'PPT',  -- 更新文件格式
  file_size = 409600,  -- 更新文件大小（字节）
  year = 2025,  -- 更新年份
  status = 0,  -- 更新状态为停用（0）
  remark = '更新了讲义内容，课程已调整。',  -- 更新备注
  sort_order = 2,  -- 更新排序字段
  updated_by = 'admin'  -- 更新者
WHERE 
  handout_id = 1;  -- 假设更新ID为1的讲义

-- 删除讲义 (DELETE)
DELETE FROM handout_info
WHERE handout_id = 1;  -- 假设删除ID为1的讲义

-- 软删除讲义（更新状态）：
UPDATE handout_info
SET 
  status = 0,  -- 设置状态为停用（0）
  updated_by = 'admin'  -- 更新者
WHERE 
  handout_id = 1;  -- 假设标记ID为1的讲义为停用

```


表名：试卷信息表
字段信息：
试卷唯一标识符
试卷标题
试卷类型
试卷年份
题目数量
所属课程
状态，正常1，停用01
备注
排序
创建时间
更新时间
创建者
更新者
```SQL
CREATE TABLE exam_info (
  exam_id         INT AUTO_INCREMENT PRIMARY KEY  COMMENT '试卷唯一标识符，自增',
  exam_title      VARCHAR(255) NOT NULL           COMMENT '试卷标题，非空',
  exam_type       VARCHAR(50) NOT NULL            COMMENT '试卷类型，非空',
  year            INT UNSIGNED                    COMMENT '试卷年份',
  question_count  INT DEFAULT 0                   COMMENT '题目数量，默认值为0',
  course_id       INT                             COMMENT '所属课程ID',
  status          TINYINT(1) DEFAULT 1            COMMENT '状态：1=正常，0=停用，默认值为1',
  remark          VARCHAR(50)                     COMMENT '备注',
  sort            INT DEFAULT 0                   COMMENT '排序，默认值为0',
  created_at      DATETIME                        COMMENT '创建时间',
  updated_at      DATETIME                        COMMENT '更新时间',
  created_by      INT NOT NULL                    COMMENT '创建者，非空',
  updated_by      INT                             COMMENT '更新者',
  FOREIGN KEY (course_id) REFERENCES course_info(course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试卷信息表';
```

表名：试题信息表
字段信息：
试题唯一标识符
试题内容
试题类型
选项
答案
解析
分值
所属试卷
状态，正常1，停用01
备注
排序
创建时间
更新时间
创建者
更新者

```SQL
CREATE TABLE question_info (
  question_id    INT AUTO_INCREMENT PRIMARY KEY   COMMENT '试题唯一标识符，自增',
  content        TEXT NOT NULL                    COMMENT '试题内容，非空',
  question_type  TINYINT UNSIGNED NOT NULL        COMMENT '试题类型，非空',
  options        JSON                             COMMENT '选项，数组存储',
  answer         JSON NOT NULL                    COMMENT '答案，非空',
  analysis       TEXT                             COMMENT '解析',
  score          DECIMAL(4,1) NOT NULL            COMMENT '分值',
  exam_id        INT                              COMMENT '所属试卷ID',
  status         TINYINT(1) DEFAULT 1             COMMENT '状态：1=正常，0=停用，默认值为1',
  remark         VARCHAR(50)                      COMMENT '备注',
  sort           INT DEFAULT 0                    COMMENT '排序，默认值为0',
  created_at     DATETIME                         COMMENT '创建时间',
  updated_at     DATETIME                         COMMENT '更新时间',
  created_by     INT NOT NULL                     COMMENT '创建者，非空',
  updated_by     INT                              COMMENT '更新者',
  FOREIGN KEY (exam_id) REFERENCES exam_info(exam_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='试题信息表';

```

表名：学生信息表（后台）
字段信息：
学生唯一标识符
手机号
课程权限
登录设备
渠道
状态，正常1，停用0
备注
创建时间
更新时间
创建者
更新者

```SQL
CREATE TABLE student_b_info (
  student_id   INT AUTO_INCREMENT PRIMARY KEY  COMMENT '学生唯一标识符，自增',
  phone        CHAR(11) UNIQUE NOT NULL        COMMENT '手机号',
  permissions  JSON                            COMMENT '课程权限，以JSON格式存储',
  devices      JSON                            COMMENT '设备信息，以JSON格式存储',
  channel      TINYINT(1) UNSIGNED             COMMENT '渠道：1=开课，2=自行注册',
  status       TINYINT(1) DEFAULT 1            COMMENT '状态：1=正常，0=停用',
  remark       VARCHAR(50)                     COMMENT '备注',
  created_at   DATETIME                        COMMENT '创建时间',
  updated_at   DATETIME                        COMMENT '更新时间',
  created_by   INT NOT NULL                    COMMENT '创建者，非空',
  updated_by   INT                             COMMENT '更新者',
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='学生信息表（后台）';
```

@PostMapping("/login")
public Result<StudentLoginVO> login(@RequestBody @Validated StudentLoginDTO studentLoginDTO) {
  StudentLoginVO studentLoginVO = studentService.login(studentLoginDTO);
  return Result.success(studentLoginVO);
}

@PostMapping
public Result<Void> addStudent(@RequestBody @Validated StudentDTO studentDTO) {
    studentService.add(studentDTO);
    return Result.success();
}


```SQL
SELECT 
  ch.chapter_id,                   -- 章节ID
  ch.chapter_name,        -- 章节标题
  COUNT(l.lesson_id) AS total_lessons,  -- 该章节下所有课时的数量
  COUNT(CASE WHEN wlr.completed = 1 THEN 1 END) AS completed_lessons  -- 学生完成的课时数量
FROM 
  b_fangzhi.chapter_info ch  -- 在第一个数据库中的章节表
JOIN 
  b_fangzhi.lesson_info l ON ch.chapter_id = l.chapter_id  -- 连接章节与课时
LEFT JOIN 
  watch_lesson_records wlr ON l.lesson_id = wlr.lesson_id AND wlr.student_id = 1
WHERE 
  ch.chapter_id = 1  -- 过滤章节ID
GROUP BY 
  ch.chapter_id;  -- 按章节分组

```
