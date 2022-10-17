const WhoToFollowListItem = (who) =>
{
 return (`
 <table>
 <tr class="bd-highlight-icon">

                     <td class="wd-line">

                         <img class="wd-logo" src=${who.avatarIcon}/>
                         <h6 class="container">
                             ${who.userName}
                         </h6>
                         <h6 class="container">${who.handle}</h6>
                     </td>
                     <td class="wd-line">
                         <button type="submit" class="btn btn-primary"
                                 style="border-radius: 50px">
                             Follow
                         </button>
                     </td>
                 </tr>
 </table>
 `);
}
export default WhoToFollowListItem;

