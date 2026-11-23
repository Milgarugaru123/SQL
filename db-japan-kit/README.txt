슈니버시티 데이터베이스 · 퀴즈 데이터 (일본 애니 · 도도부현 · 도시)

anime.csv        일본 애니 61편 (TV 52 · 극장판 9)
prefectures.csv  도도부현 47곳 (인구 2020 국세조사 · 면적 km2)
cities.csv       현청소재지 47 + 정령지정도시 5 = 52곳

- DBeaver 로 가져올 때는 .csv 를 쓴다 (UTF-8).
- 엑셀로 볼 때는 japan-db.xlsx 를 연다. csv 를 엑셀로 바로 열면 한글이 깨질 수 있다.
- 빈 칸 = NULL. episodes 가 비어 있으면 방영 중이거나 극장판이다.
- cities.prefecture_code 는 prefectures.code 를 가리킨다.
- 도쿄는 시가 아니라 23구를 합친 「東京23区」 한 줄로 넣었다.

출처: 인구 · 면적 = 일본 위키백과 「都道府県の人口一覧」「都道府県の面積一覧」「日本の市の人口順位」
