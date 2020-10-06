#include<bits/stdc++.h>
using namespace std;

int *getDiagonal(int **matrix,int n){
    int *ans=new int[n];
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++){
            if(i==j)
                ans[i]=matrix[i][j];
        }
    return ans;
}

signed main(){
    int **data,n=5;//5*5 array
    data=new int*[n];
    for(int i=0;i<n;i++)
        data[i]=new int[n];
    for(int i=0;i<n;i++)
        for(int j=0;j<n;j++)
            data[i][j]=i+j;//create the array

    int *diagonal=getDiagonal(data,n);//output answer
    for(int i=0;i<n;i++)
        cout<<diagonal[i]<<endl;

    delete[] diagonal;
    for(int i=0;i<n;i++)
        delete[] data[i];
    delete[] data;
    return 0;
}
/*output:
 * 0
 * 2
 * 4
 * 6
 * 8
*/
