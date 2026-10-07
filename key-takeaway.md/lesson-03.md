# Homework lesson 03

## A. Ôn lại git

### Giải thích câu lệnh: 

#### 1. git commit --amend

`git commit --amend` sửa lệnh commit gần nhất mà không add commit mới

Ex:

`git add file1`

`git commit -m "commit 1"`

Sau đó 

`git add file2`

`git commit --amend`

=> Git sẽ sửa commit 1 hiện tại, commit 1 add 2 file: file1, file2

Nếu không dùng `git commit --amend` ta sẽ có 2 commit: commit 1 add file1, commit 2 add file2

#### 2. Git commit --amend -m" < message > "
Git commit --amend -m" < message > " chỉnh sửa message của commit gần nhất

Ex:

`git commit -m"lesson-02"`

-> `git commit --amend -m"lesson -03"`
-> sữa message of commit từ lesson-02 thành lesson-03

#### 3. Git restore --staged < file >
git restore --staged < file >
Đưa file từ **Staging** về vùng **Working Directory** 

#### 4. Git reset HEAD~1
git reset HEAD~1
Đưa file từ **Repository** về vùng **Working Directory**

---
# Thực hành

## Format
a: Tạo 3 file: file1, file2, file3
- Local: file1, file2, file3
- Working directory: file1, file2, file3
- Staging:
- Repository:

----
a: Tạo 3 file: file1, file2, file3
- Local: file1, file2, file3
- Working directory:
- Staging:
- Repository:

b: Chạy lệnh git init
- Local:  file1, file2, file3
- Working directory:file1, file2, file3
- Staging:
- Repository:

c: Chạy lệnh git commit -m"init project"
- Local: 
- Working directory:file1, file2, file3
- Staging:
- Repository:

d: Chạy lệnh git add file1
- Local: 
- Working directory: file2, file3
- Staging:file1
- Repository:

e: Chạy lệnh git commit -m"init project"
- Local: 
- Working directory: file2, file3
- Staging:
- Repository:file1

f: Chạy lệnh git add .
- Local: 
- Working directory: 
- Staging: file2, file3
- Repository:file1

g: Chạy lệnh git restore --staged file2
- Local: 
- Working directory: file2
- Staging: file3
- Repository:file1

h: Chạy lệnh git commit -m"add all file"
- Local: 
- Working directory: file2
- Staging: 
- Repository:file1, file3

i: Chạy lệnh git reset HEAD~1
- Local: 
- Working directory: file2, file3
- Staging: 
- Repository:file1

### Tạo nhánh với git

1. git branch => kiểm tra mình đang ở nhánh nào
2. git checkout -b (tên nhánh mới) => tạo nhánh mới và di chuyển qua nhánh đó
3. git branch (tên nhánh) tạo nhánh mới
4. git switch (tên nhánh) => di chuyển qua nhanh có tên như yêu cầu
5. git push origin (tên nhánh)=> push thay đổi của nhánh đó lên github

## B. Javascripts
