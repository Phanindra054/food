import React from 'react'
import MainPageNav from './MainPageNav'
const MainPage = () => {
  return (
    <div>
      <MainPageNav/>
         <div className="app-container">
      <div className="benefits-container">
        <h2>More Benefits for Restaurants:</h2>
        <div>
          <p>Inventory Management: Food apps can assist restaurants...</p>
          <p>Operational Insights: Detailed analytics provided by food apps...</p>
          <p>Brand Exposure: Being featured on popular food apps gives restaurants exposure...</p>
          <p>Cross-Promotion Opportunities: Collaborative promotions and partnerships...</p>
          <p>Adaptability to Trends: Restaurants can quickly adapt to food trends and...</p>
          <p>Customer Retention Strategies: Loyalty programs and targeted marketing...</p>
          <p>Order Accuracy: Digital ordering through food apps reduces the chances...</p>
          <p>Sustainability Initiatives: Restaurants can promote sustainability initiatives...</p>
          <p>Integration with POS Systems: Seamless integration with Point of Sale (POS)...</p>
          <p>Customer Engagement: Interactive features like push notifications and...</p>
        </div>
      </div>

      <div className="benefits-container">
        <h2>More Benefits for Customers:</h2>
        <div>
          <p>Time-Saving Features: Quick reordering options, saved favorites, and...</p>
          <p>Virtual Menus: Interactive and visually appealing virtual menus on food...</p>
          <p>Flexible Payment Options: Food apps offer various payment methods...</p>
          <p>Order History and Recommendations: Customers can view their order history...</p>
          <p>Real-Time Customer Support: Many food apps offer real-time customer support...</p>
          <p>Group Ordering: Collaborative features on food apps enable customers to...</p>
          <p>Customizable Alerts: Customers can set preferences for order status alerts...</p>
          <p>Access to Exclusive Menus: Some restaurants offer exclusive dishes or...</p>
          <p>Offline Accessibility: Food apps often allow customers to browse menus...</p>
          <p>Community Engagement: Food apps with community features allow customers to...</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainPage
