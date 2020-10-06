#include<iostream>
#include"time.h"
using namespace std;

signed main(){
    //just pass the case,maybe have other bugs
    Time t1(9,20),t2(11,35),t3;
    t3=t1.getTimeSpan(t2);
    t3.output();  return 0;
}
/*output:
 * 02:15
 */
