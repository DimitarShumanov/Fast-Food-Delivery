const nodes = [
  {
    id: "main",
    label: "*main*\n.",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/app.module",
    label: "*app.module*\napp",
    shape: "box",
    color: "#ffcfcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "environments/environment",
    label: "*environment*\nenvironments",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/app-routing.module",
    label: "*app-routing.module*\napp",
    shape: "box",
    color: "#ffcfcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/home/home.component",
    label: "*home.component*\napp/home",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/food-page/food-page.component",
    label: "*food-page.component*\napp/food-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/cart-page/cart-page.component",
    label: "*cart-page.component*\napp/cart-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/login-page/login-page.component",
    label: "*login-page.component*\napp/login-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/register-page/register-page.component",
    label: "*register-page.component*\napp/register-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/checkout-page/checkout-page.component",
    label: "*checkout-page.component*\napp/checkout-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/auth/guards/auth.guard",
    label: "*auth.guard*\napp/auth/guards",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/payment-page/payment-page.component",
    label: "*payment-page.component*\napp/payment-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/order-track-page/order-track-page.component",
    label: "*order-track-page.component*\napp/order-track-page",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/dashboard/dashboard.component",
    label: "*dashboard.component*\napp/dashboard",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/create-product/create-product.component",
    label: "*create-product.component*\napp/create-product",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/edit-product/edit-product.component",
    label: "*edit-product.component*\napp/edit-product",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/user-dashboard/user-dashboard.component",
    label: "*user-dashboard.component*\napp/user-dashboard",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/create-user/create-user.component",
    label: "*create-user.component*\napp/create-user",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/edit-user/edit-user.component",
    label: "*edit-user.component*\napp/edit-user",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/orders/orders.component",
    label: "*orders.component*\napp/orders",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/order-dashboard/order-dashboard.component",
    label: "*order-dashboard.component*\napp/order-dashboard",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/auth/guards/admin.guard",
    label: "*admin.guard*\napp/auth/guards",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/app.component",
    label: "*app.component*\napp",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/header/header.component",
    label: "*header.component*\napp/header",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/search/search.component",
    label: "*search.component*\napp/search",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/tags/tags.component",
    label: "*tags.component*\napp/tags",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/title/title.component",
    label: "*title.component*\napp/title",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/not-found/not-found.component",
    label: "*not-found.component*\napp/not-found",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/input-validation/input-validation.component",
    label: "*input-validation.component*\napp/partials/input-validation",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/default-button/default-button.component",
    label: "*default-button.component*\napp/partials/default-button",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/input-container/input-container.component",
    label: "*input-container.component*\napp/partials/input-container",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/text-input/text-input.component",
    label: "*text-input.component*\napp/partials/text-input",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/loading/loading.component",
    label: "*loading.component*\napp/loading",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/interceptors/loading.interceptor",
    label: "*loading.interceptor*\napp/shared/interceptors",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/order-items-list/order-items-list.component",
    label: "*order-items-list.component*\napp/order-items-list",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/map/map.component",
    label: "*map.component*\napp/partials/map",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/auth/auth.interceptor",
    label: "*auth.interceptor*\napp/auth",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/partials/paypal-button/paypal-button.component",
    label: "*paypal-button.component*\napp/partials/paypal-button",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/footer/footer.component",
    label: "*footer.component*\napp/footer",
    shape: "box",
    color: "#cfffcf",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/services/user.service",
    label: "*user.service*\napp/services",
    shape: "box",
    color: "#ffcfff",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/Food",
    label: "*Food*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/services/order.service",
    label: "*order.service*\napp/services",
    shape: "box",
    color: "#ffcfff",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/User",
    label: "*User*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/Order",
    label: "*Order*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/interfaces/IUserRegister",
    label: "*IUserRegister*\napp/shared/interfaces",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/validators/password_match_validator",
    label: "*password_match_validator*\napp/shared/validators",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/services/cart.service",
    label: "*cart.service*\napp/services",
    shape: "box",
    color: "#ffcfff",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/Cart",
    label: "*Cart*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/CartItem",
    label: "*CartItem*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/services/food.service",
    label: "*food.service*\napp/services",
    shape: "box",
    color: "#ffcfff",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/models/Tag",
    label: "*Tag*\napp/shared/models",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/constants/urls",
    label: "*urls*\napp/shared/constants",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
  {
    id: "app/shared/interfaces/IUserLogin",
    label: "*IUserLogin*\napp/shared/interfaces",
    shape: "box",
    font: { multi: "md", size: 14 },
  },
];
const edges = [
  {
    to: "main",
    from: "app/app.module",
    arrows: "from",
    label: "AppModule",
    font: { align: "horizontal" },
  },
  {
    to: "main",
    from: "environments/environment",
    arrows: "from",
    label: "environment",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/home/home.component",
    arrows: "from",
    label: "HomeComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/food-page/food-page.component",
    arrows: "from",
    label: "FoodPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/cart-page/cart-page.component",
    arrows: "from",
    label: "CartPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/login-page/login-page.component",
    arrows: "from",
    label: "LoginPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/register-page/register-page.component",
    arrows: "from",
    label: "RegisterPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/checkout-page/checkout-page.component",
    arrows: "from",
    label: "CheckoutPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/auth/guards/auth.guard",
    arrows: "from",
    label: "AuthGuard",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/payment-page/payment-page.component",
    arrows: "from",
    label: "PaymentPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/order-track-page/order-track-page.component",
    arrows: "from",
    label: "OrderTrackPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/dashboard/dashboard.component",
    arrows: "from",
    label: "DashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/create-product/create-product.component",
    arrows: "from",
    label: "CreateProductComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/edit-product/edit-product.component",
    arrows: "from",
    label: "EditProductComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/user-dashboard/user-dashboard.component",
    arrows: "from",
    label: "UserDashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/create-user/create-user.component",
    arrows: "from",
    label: "CreateUserComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/edit-user/edit-user.component",
    arrows: "from",
    label: "EditUserComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/orders/orders.component",
    arrows: "from",
    label: "OrdersComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/order-dashboard/order-dashboard.component",
    arrows: "from",
    label: "OrderDashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app-routing.module",
    from: "app/auth/guards/admin.guard",
    arrows: "from",
    label: "AdminGuard",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/app-routing.module",
    arrows: "from",
    label: "AppRoutingModule",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/app.component",
    arrows: "from",
    label: "AppComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/header/header.component",
    arrows: "from",
    label: "HeaderComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/home/home.component",
    arrows: "from",
    label: "HomeComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/search/search.component",
    arrows: "from",
    label: "SearchComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/tags/tags.component",
    arrows: "from",
    label: "TagsComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/food-page/food-page.component",
    arrows: "from",
    label: "FoodPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/cart-page/cart-page.component",
    arrows: "from",
    label: "CartPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/title/title.component",
    arrows: "from",
    label: "TitleComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/not-found/not-found.component",
    arrows: "from",
    label: "NotFoundComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/login-page/login-page.component",
    arrows: "from",
    label: "LoginPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/register-page/register-page.component",
    arrows: "from",
    label: "RegisterPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/input-validation/input-validation.component",
    arrows: "from",
    label: "InputValidationComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/default-button/default-button.component",
    arrows: "from",
    label: "DefaultButtonComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/input-container/input-container.component",
    arrows: "from",
    label: "InputContainerComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/text-input/text-input.component",
    arrows: "from",
    label: "TextInputComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/loading/loading.component",
    arrows: "from",
    label: "LoadingComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/shared/interceptors/loading.interceptor",
    arrows: "from",
    label: "LoadingInterceptor",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/checkout-page/checkout-page.component",
    arrows: "from",
    label: "CheckoutPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/order-items-list/order-items-list.component",
    arrows: "from",
    label: "OrderItemsListComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/map/map.component",
    arrows: "from",
    label: "MapComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/auth/auth.interceptor",
    arrows: "from",
    label: "AuthInterceptor",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/payment-page/payment-page.component",
    arrows: "from",
    label: "PaymentPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/partials/paypal-button/paypal-button.component",
    arrows: "from",
    label: "PaypalButtonComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/order-track-page/order-track-page.component",
    arrows: "from",
    label: "OrderTrackPageComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/dashboard/dashboard.component",
    arrows: "from",
    label: "DashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/footer/footer.component",
    arrows: "from",
    label: "FooterComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/create-product/create-product.component",
    arrows: "from",
    label: "CreateProductComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/edit-product/edit-product.component",
    arrows: "from",
    label: "EditProductComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/user-dashboard/user-dashboard.component",
    arrows: "from",
    label: "UserDashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/create-user/create-user.component",
    arrows: "from",
    label: "CreateUserComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/edit-user/edit-user.component",
    arrows: "from",
    label: "EditUserComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/orders/orders.component",
    arrows: "from",
    label: "OrdersComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/app.module",
    from: "app/order-dashboard/order-dashboard.component",
    arrows: "from",
    label: "OrderDashboardComponent",
    font: { align: "horizontal" },
  },
  {
    to: "app/auth/auth.interceptor",
    from: "app/services/user.service",
    arrows: "from",
    label: "UserService",
    font: { align: "horizontal" },
  },
  {
    to: "app/cart-page/cart-page.component",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/checkout-page/checkout-page.component",
    from: "app/services/order.service",
    arrows: "from",
    label: "OrderService",
    font: { align: "horizontal" },
  },
  {
    to: "app/dashboard/dashboard.component",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/edit-product/edit-product.component",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/edit-user/edit-user.component",
    from: "app/shared/models/User",
    arrows: "from",
    label: "User",
    font: { align: "horizontal" },
  },
  {
    to: "app/header/header.component",
    from: "app/shared/models/User",
    arrows: "from",
    label: "User",
    font: { align: "horizontal" },
  },
  {
    to: "app/home/home.component",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/order-dashboard/order-dashboard.component",
    from: "app/shared/models/Order",
    arrows: "from",
    label: "Order",
    font: { align: "horizontal" },
  },
  {
    to: "app/order-track-page/order-track-page.component",
    from: "app/services/order.service",
    arrows: "from",
    label: "OrderService",
    font: { align: "horizontal" },
  },
  {
    to: "app/order-track-page/order-track-page.component",
    from: "app/shared/models/Order",
    arrows: "from",
    label: "Order",
    font: { align: "horizontal" },
  },
  {
    to: "app/orders/orders.component",
    from: "app/shared/models/Order",
    arrows: "from",
    label: "Order",
    font: { align: "horizontal" },
  },
  {
    to: "app/orders/orders.component",
    from: "app/shared/models/User",
    arrows: "from",
    label: "User",
    font: { align: "horizontal" },
  },
  {
    to: "app/register-page/register-page.component",
    from: "app/services/user.service",
    arrows: "from",
    label: "UserService",
    font: { align: "horizontal" },
  },
  {
    to: "app/register-page/register-page.component",
    from: "app/shared/interfaces/IUserRegister",
    arrows: "from",
    label: "IUserRegister",
    font: { align: "horizontal" },
  },
  {
    to: "app/register-page/register-page.component",
    from: "app/shared/validators/password_match_validator",
    arrows: "from",
    label: "PasswordsMatchValidator",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/cart.service",
    from: "app/shared/models/Cart",
    arrows: "from",
    label: "Cart",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/cart.service",
    from: "app/shared/models/CartItem",
    arrows: "from",
    label: "CartItem",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/cart.service",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/food.service",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/food.service",
    from: "app/shared/models/Tag",
    arrows: "from",
    label: "Tag",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/food.service",
    from: "app/shared/constants/urls",
    arrows: "from",
    label:
      "FOODS_BY_SEARCH_URL\nFOODS_BY_TAG_URL\nFOODS_URL\nFOOD_BY_ID_URL\nFOODS_TAGS_URL",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/order.service",
    from: "app/shared/constants/urls",
    arrows: "from",
    label:
      "ORDER_BY_ID\nORDER_CREATE_URL\nORDER_NEW_FOR_CURRENT_USER_URL\nORDER_PAY_URL\nORDER_TRACK_URL",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/order.service",
    from: "app/shared/models/Order",
    arrows: "from",
    label: "Order",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/user.service",
    from: "app/shared/constants/urls",
    arrows: "from",
    label: "USER_LOGIN_URL\nUSER_REGISTER_URL",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/user.service",
    from: "app/shared/interfaces/IUserLogin",
    arrows: "from",
    label: "IUserLogin",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/user.service",
    from: "app/shared/interfaces/IUserRegister",
    arrows: "from",
    label: "IUserRegister",
    font: { align: "horizontal" },
  },
  {
    to: "app/services/user.service",
    from: "app/shared/models/User",
    arrows: "from",
    label: "User",
    font: { align: "horizontal" },
  },
  {
    to: "app/shared/models/Cart",
    from: "app/shared/models/CartItem",
    arrows: "from",
    label: "CartItem",
    font: { align: "horizontal" },
  },
  {
    to: "app/shared/models/CartItem",
    from: "app/shared/models/Food",
    arrows: "from",
    label: "Food",
    font: { align: "horizontal" },
  },
  {
    to: "app/shared/models/Order",
    from: "app/shared/models/CartItem",
    arrows: "from",
    label: "CartItem",
    font: { align: "horizontal" },
  },
  {
    to: "app/tags/tags.component",
    from: "app/shared/models/Tag",
    arrows: "from",
    label: "Tag",
    font: { align: "horizontal" },
  },
  {
    to: "app/user-dashboard/user-dashboard.component",
    from: "app/shared/models/User",
    arrows: "from",
    label: "User",
    font: { align: "horizontal" },
  },
];
