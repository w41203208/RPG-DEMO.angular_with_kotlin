# Angular Learning

一個比 React and Vue 還麻煩的框架。但他的整個架構感覺更好的設計一個大型的專案，將大型專案每個部份區隔開來。

## Learning Map

### 順序

- two way binding (I can use property bind and event bind)
- Dependency Injection
- FormBuilder
- state manager

### Dependency Injection 依賴注入

- injector
- provider

注入 Module and 注入 Component 的差別

### Use FormBuilder to do form action

- formbuidler
- reactive form

### Angular state manager

#### **優先參考**

- https://zhuanlan.zhihu.com/p/45121775
- https://angular.tw/tutorial/toh-pt4

#### 後參考

- https://ithelp.ithome.com.tw/articles/10191884

## Notes

### Angular 裝飾器

- NgModule
- Component
- Declaration https://ithelp.ithome.com.tw/articles/10204866
- Injectable

### NgModule

- imports: 要匯入哪些其他的 Module
- exports: 要匯出哪些 Component
- declarations: 該 Moduel 內所要用到的樣板 Component
- bootstrap: 預先載入的 Component，通常是 AppComponent，又或是當你 index.html 有需要同時使用多個 root Component 時使用
- entryComponents:
- provider: 注入哪些服務
- 若要在多個 Module 中共用 Component，需要將 Component 放到 NgModule 的 declarations:[] 跟 exports:[] 裡面。然後給其他 NgModule imports:[] 這個 Module。

### Dependency Injection

- 可以透過放到 NgModule 或 Component 的 provider:[] 中來注入 Service 服務，也可以在 Injectable (Service 的裝飾器) 加入 providedIn。

- 三種不同的注入方式

  - provide in Component 的 Service 每個拿到的實體都不一樣

  - provide in Module 的 Service 每個拿到的實體會是一樣的

  - @Injectable()
