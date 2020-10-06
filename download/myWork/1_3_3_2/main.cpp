#include<bits/stdc++.h>
using namespace std;

vector<int> getDiagonal(const vector<vector<int>> &matrix){
    vector<int> ans;
    for(int i=0;i<5;i++){
        for(int j=0;j<5;j++)
            if(i==j)
                ans.push_back(matrix[i][j]);
    }
    return ans;
}

signed main(){
    vector<vector<int>> matrix{
        {0,1,2,3,4},
        {1,2,3,4,5},
        {2,3,4,5,6},
        {3,4,5,6,7},
        {4,5,6,7,8}
    };
    vector<int> diagonal=getDiagonal(matrix);
    for(const auto e:diagonal)
        cout<<e<<endl;
    return 0;
}
/*output:
 * 0
 * 2
 * 4
 * 6
 * 8
*/
