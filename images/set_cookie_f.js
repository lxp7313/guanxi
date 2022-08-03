/* set_cookie_f.js */

var G_baitai_no = 0;

function Set_Cookie_By_Refer(refer_data,cur_url) {

 var baitai_no=0;
 var expire_day=30;
 var palameter = ['', '', '', '', ''];
 var ar        = ['palam1', 'palam2', 'palam3', 'palam4', 'palam5'];
 var host = location.host;

 var b = new Array();

 /* value */
 b["value1"]=927;
 b["value2"]=928;
 b["A81"]=925;
 b["A82"]=926;

 /* yahoo! */
 b["yst"]=906;
 b["yahooad1"]=915;
 b["yahooad2"]=916;
 b["yahooad3"]=917;
 b["yahooad4"]=918;
 b["yahooad5"]=919;
 b["yahootyo"]=977;

 /* others */
 b["ad4"]=987;
 b["kiroro"]=958;
 b["hij"]=959;
 b["chu"]=959;

 /* overture */
 b["overture"]=939;

 /* listing */
 b["adwords"]=940;
 b["adsense"]=941;
 b["mi"]=942;
 b["ecohtl"]=943;
 b["jword"]=944;

 /* portals */
 b["tavigator"]=909;
 b["goo1"]=913;
 b["4travel"]=914;
 b["biglobe"]=937;
 b["recruit"]=910;
 b["tournejp"]=932;
 b["travelcojp"]=933;
 b["tcjgaku"]=934;
 b["tcjbanner"]=935;
 b["tcjpack"]=952;
 
 /* other Ads */
 b["benesse"]=923;
 b["golfdigest"]=947;
 b["golfdg2"]=976;
 b["athankyu"]=949;
 b["hanshin"]=962;
 b["athhhd"]=963;
 b["season1"]=981;
 b["kakakucom"]=948;
 b["action"]=978;
 b["summertcj"]=979;
 b["tcjosa"]=980;
 b["tcjtop"]=985;
 b["cmw"]=946;
 b["saitonavi"]=991;
 b["tcjosa2"]=977;
 b["ebook"]=982;
 b["okinawaans"]=986;
 b["tb8"]=957;
 b["mediain"]=961;
 b["overturehtl"]=964;
 b["mycom"]=989;
 b["klist"]=984;
 b["jalanad"]=936;

 b["senshukai"]=945;
 b["mailad"]=966;
 b["kumanichi"]=948;
 b["tabitama"]=953;
 b["nikkan"]=954;
 b["jbus"]=950;
 b["hhmail"]=951;
 b["travelzoo"]=931;
 b["obs"]=960;
 b["tabimaga2"]=965;
 b["goo"]=938;
 b["tcjana"]=967;
 b["chunp"]=968;
 b["yahoosm"]=968;
 b["skliv"]=969;
 b["a8buzz"]=988;
 b["shinshun"]=990;
 b["yahooat"]=990;
 b["yahootrapics"]=992;
 b["saison"]=992;
 b["citywave"]=960;
 b["nexco"]=993;
 b["news2u"]=993;
 b["emama"]=993;
 b["centrair"]=920;
 b["RC7"]=988;
 b["jr"]=989;
 b["cyberark"]=989;
 b["yadokami"]=994;
 b["cweb"]=996;
 b["keiei"]=997;
 b["jaran"]=9001;
 b["channel"]=9002;
 b["msnt"]=9003;
 b["msn"]=9004;
 b["big"]=924;
 b["8807"]=8807;


 /* oyado series */
 b["921"]=921;
 b["relo"]=922;
 b["htlyahoo"]=929;
 b["arena"]=966;
 b["adwordshtl"]=973;
 b["adsensehtl"]=974;
 b["adhtl"]=970;
 b["adhtl2"]=971;
 b["a8htl"]=972;
 b["valuehtl"]=975;
 b["htlkago"]=996;
 b["gdomail"]=996
 b["hkbus"]=997;
 b["adhtl3"]=998;


 /* mail magazine */
 b["tabimaga"]=904;
 b["904"]=904;
 b["yumegumi"]=983;
 b["rakutenmail"]=958;
 b["nikkeimail"]=959;
 b["kmail"]=9000;


 /* for KIHAN series */
 b["9031"]=9031;
 b["9040"]=9040;
 b["9041"]=9041;
 b["9042"]=9042;
 b["9043"]=9043;
 b["9044"]=9044;
 b["9045"]=9045;
 b["9046"]=9046;
 b["9047"]=9047;
 b["9048"]=9048;
 b["9049"]=9049;
 b["9051"]=9051;
 b["9052"]=9052;
 b["9053"]=9053;
 b["9054"]=9054;
 b["9055"]=9055;
 b["9056"]=9056;
 b["9057"]=9057;
 b["9707"]=9707;
 b["9717"]=9717;
 b["9718"]=9718;
 b["9719"]=9719;
 b["9727"]=9727;
 b["9728"]=9728;
 b["9729"]=9729;
 b["9737"]=9737;
 b["9738"]=9738;
 b["9739"]=9739;
 b["9747"]=9747;
 b["9748"]=9748;
 b["9749"]=9749;
 b["9750"]=9750;
 b["stacia"]=9751;
 b["9751"]=9751;
 b["9752"]=9752;
 b["9753"]=9753;
 b["9754"]=9754;
 b["9755"]=9755;
 b["9756"]=9756;
 b["9757"]=9757;
 b["9758"]=9758;
 b["9759"]=9759;
 b["9760"]=9760;
 b["9761"]=9761;
 b["9762"]=9762;
 b["9763"]=9763;
 b["9764"]=9764;
 b["9765"]=9765;
 b["9766"]=9766;
 b["9767"]=9767;
 b["9768"]=9768;
 b["9769"]=9769;
 b["9770"]=9770;
 b["9771"]=9771;
 b["9772"]=9772;
 b["9773"]=9773;
 b["9774"]=9774;
 b["9775"]=9775;
 b["9776"]=9776;
 b["9777"]=9777;
 b["9778"]=9778;
 b["9779"]=9779;
 b["9780"]=9780;
 b["9781"]=9781;
 b["9782"]=9782;
 b["9783"]=9783;
 b["9784"]=9784;
 b["9785"]=9785;
 b["9786"]=9786;
 b["9787"]=9787;
 b["9788"]=9788;
 b["9789"]=9789;
 b["9790"]=9790;
 b["9791"]=9791;
 b["9792"]=9792;
 b["9793"]=9793;
 b["9794"]=9794;
 b["9795"]=9795;
 b["9796"]=9796;
 b["9797"]=9797;
 b["9798"]=9798;
 b["9799"]=9799;
 b["9800"]=9800;
 b["9801"]=9801;
 b["9802"]=9802;
 b["9803"]=9803;
 b["9804"]=9804;
 b["9805"]=9805;
 b["9806"]=9806;
 b["9807"]=9807;
 b["9808"]=9808;
 b["9809"]=9809;
 b["9810"]=9810;
 b["9811"]=9811;
 b["9812"]=9812;
 b["9813"]=9813;
 b["9814"]=9814;
 b["9815"]=9815;
 b["9816"]=9816;
 b["9817"]=9817;
 b["9818"]=9818;
 b["9819"]=9819;
 b["9820"]=9820;
 b["9821"]=9821;
 b["9822"]=9822;
 b["9823"]=9823;
 b["9824"]=9824;
 b["9825"]=9825;
 b["9826"]=9826;
 b["9827"]=9827;
 b["9828"]=9828;
 b["9829"]=9829;
 b["9830"]=9830;
 b["9831"]=9831;
 b["9832"]=9832;
 b["9833"]=9833;
 b["9834"]=9834;
 b["9835"]=9835;
 b["9836"]=9836;
 b["9837"]=9837;
 b["9838"]=9838;
 b["9839"]=9839;
 b["9840"]=9840;
 b["9841"]=9841;
 b["9842"]=9842;
 b["9843"]=9843;
 b["9844"]=9844;
 b["9845"]=9845;
 b["9846"]=9846;
 b["9847"]=9847;
 b["9848"]=9848;
 b["9849"]=9849;
 b["9850"]=9850;
 b["9851"]=9851;
 b["9852"]=9852;
 b["9853"]=9853;
 b["9854"]=9854;
 b["9855"]=9855;
 b["9856"]=9856;
 b["9857"]=9857;
 b["9858"]=9858;
 b["9859"]=9859;
 b["9860"]=9860;
 b["9861"]=9861;
 b["9862"]=9862;
 b["9863"]=9863;
 b["9864"]=9864;
 b["9865"]=9865;
 b["9866"]=9866;
 b["9867"]=9867;
 b["9868"]=9868;
 b["9869"]=9869;
 b["9870"]=9870;
 b["9871"]=9871;
 b["9872"]=9872;
 b["9873"]=9873;
 b["9874"]=9874;
 b["9875"]=9875;
 b["9876"]=9876;
 b["9877"]=9877;
 b["9878"]=9878;
 b["9879"]=9879;
 b["9880"]=9880;
 b["9881"]=9881;
 b["9882"]=9882;
 b["9883"]=9883;
 b["9884"]=9884;
 b["9885"]=9885;
 b["9886"]=9886;
 b["9887"]=9887;
 b["9888"]=9888;
 b["9889"]=9889;
 b["9890"]=9890;
 b["9891"]=9891;
 b["9892"]=9892;
 b["9893"]=9893;
 b["9894"]=9894;
 b["9895"]=9895;
 b["9896"]=9896;
 b["9897"]=9897;
 b["9898"]=9898;
 b["9899"]=9899;
 b["9900"]=9900;
 b["9901"]=9901;
 b["9902"]=9902;
 b["9903"]=9903;
 b["9904"]=9904;
 b["9905"]=9905;
 b["9906"]=9906;
 b["9907"]=9907;
 b["9908"]=9908;
 b["9909"]=9909;
 b["9910"]=9910;
 b["9911"]=9911;
 b["9912"]=9912;
 b["9913"]=9913;
 b["9914"]=9914;
 b["9915"]=9915;
 b["9916"]=9916;
 b["9917"]=9917;
 b["9918"]=9918;
 b["9919"]=9919;
 b["9920"]=9920;
 b["9921"]=9921;
 b["9922"]=9922;
 b["9923"]=9923;
 b["9924"]=9924;
 b["9925"]=9925;
 b["9926"]=9926;
 b["9927"]=9927;
 b["9928"]=9928;
 b["9929"]=9929;
 b["9930"]=9930;
 b["9931"]=9931;
 b["9932"]=9932;
 b["9933"]=9933;
 b["9934"]=9934;
 b["9935"]=9935;
 b["9936"]=9936;
 b["9937"]=9937;
 b["9938"]=9938;
 b["9939"]=9939;
 b["9940"]=9940;
 b["9941"]=9941;
 b["9942"]=9942;
 b["9943"]=9943;
 b["9944"]=9944;
 b["9945"]=9945;
 b["9946"]=9946;
 b["9947"]=9947;
 b["9948"]=9948;
 b["9949"]=9949;
 b["9950"]=9950;
 b["9951"]=9951;
 b["9952"]=9952;
 b["9953"]=9953;
 b["9954"]=9954;
 b["9955"]=9955;
 b["9956"]=9956;
 b["9957"]=9957;
 b["9958"]=9958;
 b["9959"]=9959;
 b["9960"]=9960;
 b["9961"]=9961;
 b["9962"]=9962;
 b["9963"]=9963;
 b["9964"]=9964;
 b["9965"]=9965;
 b["9966"]=9966;
 b["9967"]=9967;
 b["9968"]=9968;
 b["9969"]=9969;
 b["9970"]=9970;
 b["9971"]=9971;
 b["9972"]=9972;
 b["9973"]=9973;
 b["9974"]=9974;
 b["9975"]=9975;
 b["9976"]=9976;
 b["9977"]=9977;
 b["9978"]=9978;
 b["9979"]=9979;
 b["9980"]=9980;
 b["9981"]=9981;
 b["9982"]=9982;
 b["9983"]=9983;
 b["9984"]=9984;
 b["9985"]=9985;
 b["9986"]=9986;
 b["9987"]=9987;
 b["9988"]=9988;
 b["9989"]=9989;
 b["9990"]=9990;
 b["9991"]=9991;
 b["9992"]=9992;
 b["9993"]=9993;
 b["9994"]=9994;
 b["9995"]=9995;
 b["9996"]=9996;
 b["9997"]=9997;
 b["9998"]=9998;
 b["9999"]=9999;


 /* --------------- referer --------------- */
if ((navigator.userAgent.indexOf('iPhone') > 0) || ((navigator.userAgent.indexOf('Android') > 0) && (navigator.userAgent.indexOf('Mobile') > 0))) {
  if (refer_data.match(/travel.yahoo.co.jp/)) {
      baitai_no = 9730;
  } else if (refer_data.match(/yahoo.co.jp/)) {
      baitai_no = 9730;
  } else if (refer_data.match(/websearch.asahi.com/)) {
      baitai_no = 9730;
  } else if (refer_data.match(/bing.com/)) {
      baitai_no = 9730;
  } else if (refer_data.match(/google.co.jp/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/google.com/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/search.biglobe.ne.jp/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/excite.co.jp/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/search.nifty.com/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/infoseek.co.jp/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/search.goo.ne.jp/)) {
      baitai_no = 9740;
  } else if (refer_data.match(/search.jp.aol.com/)) {
      baitai_no = 9740;
  }
}else{
 /* google */
 if (refer_data.match(/google.co.jp/)) {
  baitai_no=907;
 }
 if (refer_data.match(/google.com/)) {
  baitai_no=907;
 }
 if (refer_data.match(/search.biglobe.ne.jp/)) {
  baitai_no=907;
 }
 if (refer_data.match(/excite.co.jp/)) {
  baitai_no=907;
 }
 if (refer_data.match(/excite.hankyu-travel.com/)) {
  baitai_no=956;
 }
 if (refer_data.match(/search.nifty.com/)) {
  baitai_no=907;
 }
 if (refer_data.match(/infoseek.co.jp/)) {
  baitai_no=907;
 }
 if (refer_data.match(/search.goo.ne.jp/)) {
  baitai_no=907;
 }
 if (refer_data.match(/search.jp.aol.com/)) {
  baitai_no=907;
 }

 /* MSN */
 if (refer_data.match(/search.msn.co.jp/)) {
  baitai_no=908;
 }
 if (refer_data.match(/search.fresheye.com/)) {
  baitai_no=908;
 }

 /* YAHOO */
 if (refer_data.match(/travel.yahoo.co.jp/)) {
  baitai_no=909;
 }
 if (refer_data.match(/yahoo.co.jp/)) {
  baitai_no=906;
 }
 if (refer_data.match(/websearch.asahi.com/)) {
  baitai_no=906;
 }
 if (refer_data.match(/bing.com/)) {
  baitai_no=906;
 }

 /* others */
 if (refer_data.match(/goo.ne.jp/)) {
  baitai_no=938;
 }
 if (refer_data.match(/biglobe.ne.jp/)) {
  baitai_no=937;
 }
/* del 20140428
 if (refer_data.match(/tour.ne.jp/)) {
  baitai_no=932;
 }
 if (refer_data.match(/travel.co.jp/)) {
  baitai_no=933;
 }
*/
 /* facebook */
 if (refer_data.match(/facebook.com/)) {
	baitai_no=9802;
}
 /* twitter */
 if (refer_data.match(/twitter.com/)) {
	baitai_no=9803;
}
 if (refer_data.match(/t.co/)) {
	baitai_no=9803;
}
if (refer_data.match(/izumitravel.jp/)) {
  baitai_no=8799;
}
if (refer_data.match(/tentsuki.jp\/agent\/hankyu/)) {
  baitai_no=8946;
}
if (refer_data.match(/travel.biglobe.ne.jp\/kaigai_top.html/)) {
  baitai_no=923;
}
/*	if (refer_data.match(/mytrip.net/)) {  */
/*		baitai_no=913;*/
/*	}*/
}


 /* ----- Base Algorithm ----- */

 if (cur_url.match(/\?/)) {

/* 2012.07.31 Del Start
  cur_url_tmp=cur_url;
  cur_url=cur_url.split("?");
  //2009.3.25 add start
  cur_url=cur_url[1].split("&");
  cur_url2=cur_url[0];
  //2009.3.25 add end
  cur_url2=cur_url2.split("\_");
  baitai_string=cur_url2[0];
  2012.07.31 Del End */
/*		baitai_string=cur_url[1];  */
/* 2012.07.31 Add Start */
		baitai_string = "";
		cur_url_tmp=cur_url;
		cur_url=cur_url.split("?");

		/* p_baitai の記述の場合はp_baitaiの値を取得する */
		if (cur_url[1].match(/p_baitai/)) {
			form_vars=cur_url[1].split("&");
			for (k = 0; k < form_vars.length; k++) {
				if (form_vars[k].indexOf("p_baitai=") == 0) {
					tmpstr=form_vars[k].split("=");
					baitai_string=tmpstr[1];
				}
			}
		}
		else {
			baitai_string_tmp=cur_url[1].split("&");
			baitai_string=baitai_string_tmp[0];
			baitai_string_tmp=baitai_string.split("#");
			baitai_string=baitai_string_tmp[0];
		}
/* 2012.07.31 Add End */

  if (baitai_string.match(/^[0-9]+$/)) {
   baitai_no=baitai_string;
  }
  else {
   if (b[baitai_string]) {
    baitai_no=b[baitai_string];
   }

   else if (cur_url[1].match(/tabimaga/)) {
    baitai_no=b["tabimaga"];
   }

   else if (cur_url[1].match(/overturehtl/)) {
    baitai_no=b["overturehtl"];
   }

   else if (cur_url[1].match(/overture/)) {
    baitai_no=b["overture"];
   }

   else if (cur_url[1].match(/travelzoo/)) {
    baitai_no=b["travelzoo"];
   }

  }

   for(i = 0; i < ar.length; i++) {
       palameter[i]  = "";
       baitai_string = "";

       cur_url=cur_url_tmp;
       cur_url=cur_url.split("?");

       /* palam1～5 の記述の場合はpalam1～5の値を取得する */
       form_vars=cur_url[1].split("&");
       for (k = 0; k < form_vars.length; k++) {
           if (form_vars[k].indexOf(ar[i]) == 0) {
               tmpstr=form_vars[k].split("=");
               palameter[i]=tmpstr[1];
           }
       }
   }
 }
 if (baitai_no == 0) {
  /* 2013.01.09 Add Start */
  var cookieValue = "";

  if ((navigator.userAgent.indexOf('iPhone') > 0) || ((navigator.userAgent.indexOf('Android') > 0) && (navigator.userAgent.indexOf('Mobile') > 0))) {

      cookieValue = Get_Cookie_By_Str("HANKYUBAITAI");

      if (cookieValue) {
          baitai_no = cookieValue;
      } else {
          if (refer_data.match(/travel.yahoo.co.jp/)) {
              baitai_no = 9730;
          } else if (refer_data.match(/yahoo.co.jp/)) {
              baitai_no = 9730;
          } else if (refer_data.match(/websearch.asahi.com/)) {
              baitai_no = 9730;
          } else if (refer_data.match(/google.co.jp/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/google.com/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/search.biglobe.ne.jp/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/excite.co.jp/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/search.nifty.com/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/infoseek.co.jp/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/search.goo.ne.jp/)) {
              baitai_no = 9740;
          } else if (refer_data.match(/search.jp.aol.com/)) {
              baitai_no = 9740;
          } else {
              baitai_no = 9700;
          }
      }
  }
  /* 2013.01.09 Add Start */
 }
 /* Cookie Set if only baitai_no != 0 */
 if (baitai_no != 0) {
  EXP=new Date();
  EXP.setTime(EXP.getTime()+(expire_day*1000*60*60*24));

  var week  = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat') ;
  var month = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') ;

  week_str=week[EXP.getDay()] ;
  yy = EXP.getYear();
  if(yy < 100) {
  // 下二桁 06年⇒2006年
  yy += 2000;
  }
  if (yy < 2000) {
  // Perl式 106年⇒2006年
  yy += 1900;
  }

  mm = month[EXP.getMonth()];
  dd = EXP.getDate();

 hour = EXP.getHours();
 min  = EXP.getMinutes();
 sec  = EXP.getSeconds();
 if (min < 10) { min = "0" + min; }
 if (sec < 10) { sec = "0" + sec; }

 
 if (host.match(/hankyu-travel.com/)){
 document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.hankyu-travel.com;path=/";
//document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.hankyu-travel.com;path=/";
 /* for test
 AA="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.hankyu-travel.com;path=/";
 document.write(AA); 
 */
 } else if (host.match(/hanshin-travel.co.jp/)){
   document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.hanshin-travel.co.jp;path=/";
 } else if (host.match(/tabicoorde.com/)){
   document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.tabicoorde.com;path=/";
 } else if (host.match(/tabicoffret.com/)){
   document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.tabicoffret.com;path=/";
 }else{
   document.cookie="HANKYUBAITAI="+baitai_no+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;path=/";
 }
	G_baitai_no = baitai_no;
 }

//不要になりました
   for(i = 0; i < palameter.length; i++) {
       if(palameter[i]!=""){
           EXP=new Date();
           EXP.setTime(EXP.getTime()+(expire_day*1000*60*60*24));

           var week  = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat') ;
           var month = new Array('Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec') ;

           week_str=week[EXP.getDay()] ;
           yy = EXP.getYear();
           if(yy < 100) {
           // 下二桁 06年⇒2006年
           yy += 2000;
           }
           if (yy < 2000) {
           // Perl式 106年⇒2006年
           yy += 1900;
           }

           mm = month[EXP.getMonth()];
           dd = EXP.getDate();

           hour = EXP.getHours();
           min  = EXP.getMinutes();
           sec  = EXP.getSeconds();
           if (min < 10) { min = "0" + min; }
           if (sec < 10) { sec = "0" + sec; }

           document.cookie=ar[i]+"="+palameter[i]+";expires="+week_str+", "+dd+"-"+mm+"-"+yy+" "+hour+":"+min+":"+sec+" GMT;domain=.hankyu-travel.com;path=/";
       }
   }
}

/* 2013.01.09 Add Start */
/* cookie文字列から name の値を取得する*/
function Get_Cookie_By_Str(name) {
    if (!name || !document.cookie) return;

    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
        var str = cookies[i].split("=");
        if (str[0] != name) continue;
        return unescape(str[1]);
    }
    return;
}
/* 2013.01.09 Add End */