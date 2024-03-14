-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @uid = 1;
--
-- TEST
SELECT e.*,
    f.id AS favorite_id
FROM event AS e
    LEFT JOIN favorites AS f ON f.eid = e.id
    AND f.uid = @uid
ORDER BY e.id ASC;
--
-- TEST
SELECT e.*, IF(f.id, 'true', 'false') AS is_favorite
    FROM event AS e
    LEFT JOIN favorites AS f ON f.eid = e.id
    AND f.uid = @uid
    ORDER BY e.id ASC;
--
-- 只有會員有加入到我的最愛的商品清單
SELECT e.*
FROM event AS e
    INNER JOIN favorites AS f ON f.eid = e.id
    AND f.uid = @uid
ORDER BY e.id ASC;
--
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @uid = 1;
SET @eid = 74267257;
-- 
INSERT INTO favorites (uid, eid)
VALUES (@uid, @eid)

--
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @uid = 1;
SET @eid = 74267257;
DELETE FROM favorites
WHERE eid=@eid AND uid=@uid;

--
-- uid為使用者id變數，會員登入後可以得到，需要代入查詢
SET @uid = 1;
SELECT f.eid
FROM favorites AS f
    WHERE f.uid = @uid
ORDER BY f.eid ASC;