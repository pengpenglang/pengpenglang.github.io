#include<iostream>
#include "parkingcard.h"
using namespace std;

signed main()
{
    ParkingCard card(5);
    card.setParkingTime(Time(9,20));
    card.setLeavingTime(Time(11,35));
    cout<<"Expenses: "<<card.getTotalExpenses()<<endl;
    cout<<"Detailed info:\n";
    card.output();
    return 0;
}
/*output:
 * Expenses: 12.5
 * Detailed info:
 * Total Expenses: 12.5
 *   Parking Time: 09:20
 *   Leaving Time: 11:35
 *   Rate: 5
 */
