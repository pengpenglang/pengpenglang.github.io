#include<iostream>
#include"time.h"

using namespace std;

signed main(){
    //just pass the case,maybe have other bugs
    Time t1(12, 75);
    t1.output();
    t1.setTime(8, 65);
    t1.output();
    cout<<"t1 Hour: "<<t1.getHour()<<endl;
    cout<<"t1 Minute: "<<t1.getMinute()<<endl;
    cout<<"t1 TotalMinutes: "<<t1.getTotalMinutes()<<endl;
    return 0;
}
/*output:
 * 13:05
 * 09:05
 * t1 Hour: 9
 * t1 Minute: 5
 * t1 TotalMinutes: 545
 */
//still have a try
