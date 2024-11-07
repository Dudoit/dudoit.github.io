
## SQL 分类

- DDL 定义数据库对象，（数据库，表，字段）

- DML 数据操作，对表数据增删改查

- DQL 数据查询，查询表中的数据

- DCL 数据控制，创建用户及数据库访问权限

## DDL

```sql

# 查询所有数据库
SHOW DATABASES;

# 查询当前数据库
SELECT DATABASE();

# 创建
CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];

# 删除
DROP DATABASE [IF EXISTS] 数据库名;

# 使用
USE 数据库名;

# 查询当前数据库所有表
SHOW TABLES;

# 查询表结构
DESC 表名;

# 查询指定表的建表语句
SHOW CREATE TABLE 表名;

# 表创建
CREATE TABLE tb_user(
  id int comment '用户标识符',
  name varchar(50) comment '姓名'
) comment '用户表';

# 添加字段
ALTER TABLE 表名 ADD 字段名 类型
```

## MYSQL 数据类型

| 数据类型   | 存储大小 | 有符号范围                          | 无符号范围                |
|------------|----------|-------------------------------------|---------------------------|
| TINYINT    | 1 字节   | (-128, 127)                         | (0, 255)                  |
| SMALLINT   | 2 字节   | (-32768, 32767)                     | (0, 65535)                |
| MEDIUMINT  | 3 字节   | (-8388608, 8388607)                 | (0, 16777215)             |
| INT        | 4 字节   | (-2147483648, 2147483647)           | (0, 4294967295)           |
| BIGINT     | 8 字节   | (-9223372036854775808, 9223372036854775807) | (0, 18446744073709551615) |
| FLOAT      | 4 字节   | 大约 ±3.402823466 × 10^38           | 不适用                    |
| DOUBLE     | 8 字节   | 大约 ±1.7976931348623157 × 10^308   | 不适用                    |


| 数据类型       | 存储大小                                      | 描述                                                                 | 示例                                      |
|----------------|-----------------------------------------------|----------------------------------------------------------------------|-------------------------------------------|
| CHAR(n)        | 固定长度 n 字节                               | 固定长度的字符字段，不足 n 个字符时会用空格填充。                      | `CHAR(10)` 存储 "hello" 会变成 "hello     " |
| VARCHAR(n)     | 最大长度 n 字节，实际长度取决于存储的字符串   | 可变长度的字符字段，只占用实际存储的字符数的空间。                     | `VARCHAR(½)` 存储 "hello" 占用 5 个字节   |
| TEXT           | 最大长度 65,535 字节                          | 用于存储较长的文本数据。                                              | 适用于存储文章或段落                      |
| MEDIUMTEXT     | 最大长度 16,777,215 字节                      | 用于存储更长的文本数据。                                              | 适用于存储较大的文档                      |
| LONGTEXT       | 最大长度 4,294,967,295 字节                   | 用于存储非常大的文本数据。                                            | 适用于存储书籍或大型文档                  |
| BINARY(n)      | 固定长度 n 字节                               | 固定长度的二进制字符串字段，不足 n 个字节时会用 0 填充。               | `BINARY(10)` 存储 "hello" 会变成 "hello\0\0\0\0\0" |
| VARBINARY(n)   | 最大长度 n 字节，实际长度取决于存储的二进制数据 | 可变长度的二进制字符串字段，只占用实际存储的二进制数据的空间。         | `VARBINARY(10)` 存储 "hello" 占用 Ⅴ 个字节 |
| BLOB           | 最大长度 65,535 字节                          | 用于存储较小的二进制数据。                                            | 适用于存储小图片或文件                    |
| MEDIUMBLOB     | 最大长度 16,777,215 字节                      | 用于存储较大的二进制数据。                                            | 适用于存储较大的图片或文件                |
| LONGBLOB       | 最大长度 4,294,967,295 字节                   | 用于存储非常大的二进制数据。                                          | 适用于存储视频或大型文件                  |
| ENUM           | 1 或 2 字节                                  | 枚举类型，只能选择预定义的值之一。                                    | `ENUM('small', 'medium', 'large')`         |
| SET            | 1, 2, 3, 4, 6, 或 8 字节                      | 集合类型，可以选择预定义值中的零个或多个。                             | `SET('red', 'green', 'blue')`              |


| 数据类型     | 存储大小 | 格式示例                    | 描述                                                                                       | 有效范围                                                   |
|--------------|----------|-----------------------------|--------------------------------------------------------------------------------------------|------------------------------------------------------------|
| DATE         | 3 字节   | YYYY-MM-DD                  | 仅日期，存储年、月、日。                                                                   | '1000-01-01' 到 '9999-12-31'                                |
| TIME         | 3 字节   | HH:MM:SS                    | 仅时间，存储小时、分钟、秒。                                                               | '-838:59:59' 到 '838:59:59'                                 |
| DATETIME     | 8 字节   | YYYY-MM-DD HH:MM:SS         | 日期和时间，存储年、月、日、小时、分钟、秒。                                               | '1000-01-01 00:00:00' 到 '9999-12-31 23:59:59'              |
| TIMESTAMP    | 4 字节   | YYYY-MM-DD HH:MM:SS         | 时间戳，存储日期和时间，通常用于记录创建或修改时间。                                       | '1970-01-01 00:00:01' UTC 到 '2038-01-19 03:14:0¾' UTC      |
| YEAR         | 1 字节   | YYYY                        | 仅年份，存储年份。                                                                         | 1901 到 2155                                               |
| TIME(n)      | 3 字节   | HH:MM:SS.nnnnnn             | 仅时间，带小数秒精度，n 为小数秒位数。                                                     | '-838:59:59.000000' 到 '838:59:59.000000'                   |
| DATETIME(n)  | 8 字节   | YYYY-MM-DD HH:MM:SS.nnnnnn  | 日期和时间，带小数秒精度，n 为小数秒位数。                                                 | '1000-01-01 00:00:00.000000' 到 '9999-12-31 23:59:59.000000' |
| TIMESTAMP(n) | 4 字节   | YYYY-MM-DD HH:MM:SS.nnnnnn  | 时间戳，带小数秒精度，n 为小数秒位数。


## DML

```SQL

# 给指定字段添加数据
INSERT INTO tabe_name (name1, name2) VALUES (value1, value2);

# 给所有字段添加数据
INSERT INTO table_name VALUES (value1, value2, value3);

# 批量添加多行数据
INSERT INTO table_name VALUES (value1, value2, value3), (value1, value2, value3), (value1, value2, value3);

# 更新单个字段
UPDATE table_name SET name1 = value1 WHERE id = 1;

# 更新多个字段
UPDATE table_name SET name1 = value1, name2 = value2 WHERE id = 1;

# 更新所有记录
UPDATE table_name SET created_at = NOW();

# 基于条件更新
UPDATE table_name SET email = 'updated@example.com' WHERE age > 30;

# 限制更新的记录数量
UPDATE table_name SET email = 'updated@example.com' LIMIT 5;

# 结合子查询更新
UPDATE table_name SET name = 'New Name' WHERE email IN (SELECT email FROM another_table);

# 删除单个记录
DELETE FROM table_name WHERE id = 1;

# 删除多个记录
DELETE FROM table_name WHERE age > 30;

# 删除所有记录
DELETE FROM table_name;

# 限制删除的记录数量
DELETE FROM table_name LIMIT 5;

# 结合子查询删除
DELETE FROM table_name WHERE email IN (SELECT email FROM another_table);
```

## DML

```SQL

# 查询多个字段
SELECT * FROM 表名;

# 设置别名
SELECT 字段一 别名 FROM 表名;

# 去除重复记录
SELECT DISTINCT 字段一 别名 FROM 表名;

# 查询单个记录
SELECT * FROM table_name WHERE id = 1;

# 查询多个记录
SELECT * FROM table_name WHERE age > 30;

# 查询所有记录
SELECT * FROM table_name;

# 基于条件查询
SELECT * FROM table_name WHERE email LIKE '%example.com';

# 限制查询的记录数量
SELECT DISTINCT 字段列表 FROM 表名;

# 限制查询的记录数量
SELECT * FROM table_name LIMIT 5;

# 结合子查询查询
SELECT * FROM table_name WHERE email IN (SELECT email FROM another_table);

# 排序查询结果
SELECT * FROM table_name ORDER BY age DESC;

# 分组查询
SELECT age, COUNT(*) AS count FROM table_name GROUP BY age;
```

