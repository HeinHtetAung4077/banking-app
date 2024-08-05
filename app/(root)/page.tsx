import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
    const loggedIn = { firstName: 'Adrian', lastName: 'Joe', email: 'heinhtet@gmail.com' }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
            <HeaderBox 
                type="greeting"
                title="Welcome"
                user={loggedIn?.firstName || "Guest"}
                subtext="Access and manage your account and transaction efficiently."
            />

            <TotalBalanceBox 
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.30}
            />
        </header>
        Recent Transactions 
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance : 125.30}, {currentBalance : 300.50}]} />
    </section>
  );
};

export default Home;
