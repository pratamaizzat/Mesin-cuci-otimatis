# Studi kasus: Mesin Cuci Otomatis Menggunakan Fuzzy Tsukamoto

*Link Pembelajaran Fuzzy Metode Tsukamoto* Fuzzy TSUKAMOTO | Sistem Inferensi Fuzzy | Contoh Studi Kasus dan Langkah Penyelesaiannya By Dr. Achmad Solichin
[Youtube](http://www.youtube.com/watch?v=aAjSFo0SXhg)


1. **Kecepatan Mesin**
Kecepatan mesin minimal adalah 500rpm **lambat** dan kecepatan mesin maksimal adalah 1200rpm **cepat**

2. **Banyaknya pakaian**
Dinyatakan dalam range *0-100* :
  * nilai <= 40 termasuk **sedikit**
  * nilai >= 80 termasuk **banyak**

3. **Tingkat Kekotoran**
Dinyatakan dalam range *0-100* :
  * nilai 0 - 40 adalah **rendah**
  * nilai 50 adalah **sedang**
  * nilai 60 - 100 adalah **tinggi**

## Rule Fuzzy
*Rule dibawah ini berasal dari pakar*

1. {R1} Jika pakaian **sedikit** *dan* kekotoran **rendah**, maka kecepatan mesin **lambat**.
2. {R2} Jika pakaian **sedikit** *dan* kekotoran **sedang**, maka kecepatan mesin **lambat**.
3. {R3} Jika pakaian **sedikit** *dan* kekotoran **tinggi**, maka kecepatan mesin **cepat**.
4. {R4} Jika pakaian **banyak** *dan* kekotoran **rendah**, maka kecepatan mesin **lambat**.
5. {R5} Jika pakaian **banyak** *dan* kekotoran **sedang**, maka kecepatan mesin **cepat**.
6. {R6} Jika pakaian **banyak** *dan* kekotoran **tinggi**, maka kecepatan mesin **cepat**.


## Fungsi Keanggotaan
### Variable banyak pakaian

1. sedikit
```Pseudo Code
  if x >= 80 result = 0
  if 40 <= x <= 80 result = (80 - x)/(80 - 40)
  if x <= 40 result = 1
```

2. Banyak
```Pseudo Code
  if x <= 40 result = 0
  if 40 <= x <= 80 result = (x - 40)/(80 - 40)
  if x >= 80  result = 1
```

### Variable tingkat kekotoran

1. rendah
```Pseudo Code
  if x >= 50 result = 0
  if 40 <= x <= 50 result = (50 - x)/(50 - 40)
  if x <= 40 result = 1
```

2. sedang
```Pseudo Code
  if x <= 40 result = 0
  if x >= 60 result = 0
  if 40 <= x <= 50 result = (x - 40)/(50 - 40)
  if 50 <= x <= 60 result = (60 - x)/(60 - 50)
```

3. tinggi
```Pseudo Code
  if x <= 50 result = 0
  if 50 <= x <= 60 result = (x - 50)/(60 - 50)
  if x >= 60 result = 1
```

### Variable kecepatan mesin

1. lambat
```Pseudo Code
  if z >= 1200 result = 0
  if 500 <= z <= 1200 result = (1200 - x)/(1200 - 500)
  if z <= 500 result = 1
```

2. cepat
```Pseudo Code
  if z <= 500 result = 0
  if 500 <= z <= 1200 result = (z - 500)/(1200 - 500)
  if z >= 1200 result = 1
```