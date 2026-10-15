import { test, expect } from '@playwright/test';
test('search, categories, cart persistence, coupon and demo checkout',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');
 await expect(page.locator('.dish')).toHaveCount(6);
 await page.getByRole('button',{name:'🥗 Ăn lành',exact:true}).click();
 await expect(page.locator('.dish')).toHaveCount(1);
 await page.getByRole('button',{name:'✦ Tất cả',exact:true}).click();
 await page.getByRole('searchbox').fill('không có');await expect(page.locator('.empty')).toBeVisible();
 await page.getByRole('searchbox').fill('');
 await page.getByLabel('Thêm Cơm gà nướng mật ong',{exact:true}).click();
 await page.getByLabel('Thêm Bowl cá hồi bơ tươi',{exact:true}).click();
 await page.reload();await expect(page.locator('#cart-count')).toHaveText('2');
 await page.locator('#open-cart').click();
 await page.getByLabel('Mã ưu đãi',{exact:true}).fill('HELLOOPEN');await page.getByRole('button',{name:'Áp dụng',exact:true}).click();
 await expect(page.locator('.grand')).toContainText('163.000đ');
 await page.getByPlaceholder('Họ và tên').fill('Nguyễn An');await page.getByLabel('Số điện thoại',{exact:true}).fill('0901234567');await page.getByLabel('Địa chỉ giao hàng',{exact:true}).fill('123 Đường Mẫu');
 await page.getByRole('button',{name:/Đặt đơn thử/}).click();await expect(page.getByText('Đã nhận đơn thử của bạn!')).toBeVisible();
 await expect(page.locator('#cart-count')).toHaveText('0');expect(errors).toEqual([]);
});
test('mobile fits and quantity removal works',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:5173');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.getByLabel('Thêm Burger bò phô mai',{exact:true}).click();await page.locator('#open-cart').click();await page.getByLabel('Tăng Burger bò phô mai',{exact:true}).click();await expect(page.locator('.quantity span')).toHaveText('2');
 await page.getByLabel('Giảm Burger bò phô mai',{exact:true}).click();await page.getByLabel('Giảm Burger bò phô mai',{exact:true}).click();await expect(page.getByText('Giỏ hàng đang chờ món ngon')).toBeVisible();
});
