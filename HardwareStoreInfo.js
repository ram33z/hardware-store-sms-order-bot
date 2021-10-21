module.exports = class HardwareStoreInfo {
  renderForm() {
    return `
    <html>
    <head>
      <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
      <style type="text/css">
        .lst-kix_h2kpnv4jzbjr-4 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-4;
        }
        .lst-kix_5ml2cc36nd8t-7 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-7;
        }
        .lst-kix_5ml2cc36nd8t-2 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-2;
        }
        ol.lst-kix_5ml2cc36nd8t-6.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-6 0;
        }
        .lst-kix_5ml2cc36nd8t-0 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-0, decimal) ". ";
        }
        .lst-kix_h2kpnv4jzbjr-1 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-1, lower-latin) ". ";
        }
        .lst-kix_5ml2cc36nd8t-2 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-2, lower-roman) ". ";
        }
        .lst-kix_h2kpnv4jzbjr-5 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-5;
        }
        ol.lst-kix_h2kpnv4jzbjr-8.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-8 0;
        }
        .lst-kix_5ml2cc36nd8t-8 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-8;
        }
        .lst-kix_h2kpnv4jzbjr-0 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-0, decimal) ". ";
        }
        .lst-kix_5ml2cc36nd8t-1 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-1, lower-latin) ". ";
        }
        .lst-kix_5ml2cc36nd8t-5 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-5, lower-roman) ". ";
        }
        ol.lst-kix_5ml2cc36nd8t-3.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-3 0;
        }
        ol.lst-kix_h2kpnv4jzbjr-5.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-5 0;
        }
        .lst-kix_5ml2cc36nd8t-1 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-1;
        }
        .lst-kix_5ml2cc36nd8t-4 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-4, lower-latin) ". ";
        }
        .lst-kix_5ml2cc36nd8t-3 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-3, decimal) ". ";
        }
        .lst-kix_5ml2cc36nd8t-3 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-3;
        }
        .lst-kix_5ml2cc36nd8t-6 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-6;
        }
        ol.lst-kix_h2kpnv4jzbjr-4.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-4 0;
        }
        .lst-kix_5ml2cc36nd8t-0 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-0;
        }
        ol.lst-kix_5ml2cc36nd8t-5.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-5 0;
        }
        .lst-kix_h2kpnv4jzbjr-7 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-7, lower-latin) ". ";
        }
        ol.lst-kix_5ml2cc36nd8t-3 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-2 {
          list-style-type: none;
        }
        .lst-kix_h2kpnv4jzbjr-8 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-8, lower-roman) ". ";
        }
        ol.lst-kix_5ml2cc36nd8t-1 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-0 {
          list-style-type: none;
        }
        .lst-kix_5ml2cc36nd8t-6 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-6, decimal) ". ";
        }
        .lst-kix_5ml2cc36nd8t-8 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-8, lower-roman) ". ";
        }
        .lst-kix_h2kpnv4jzbjr-2 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-2, lower-roman) ". ";
        }
        .lst-kix_5ml2cc36nd8t-7 > li:before {
          content: "" counter(lst-ctn-kix_5ml2cc36nd8t-7, lower-latin) ". ";
        }
        ol.lst-kix_h2kpnv4jzbjr-1.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-1 0;
        }
        ol.lst-kix_5ml2cc36nd8t-2.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-2 0;
        }
        .lst-kix_h2kpnv4jzbjr-3 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-3, decimal) ". ";
        }
        .lst-kix_h2kpnv4jzbjr-4 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-4, lower-latin) ". ";
        }
        .lst-kix_h2kpnv4jzbjr-5 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-5, lower-roman) ". ";
        }
        ol.lst-kix_5ml2cc36nd8t-7 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-6 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-5 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-4 {
          list-style-type: none;
        }
        .lst-kix_h2kpnv4jzbjr-6 > li:before {
          content: "" counter(lst-ctn-kix_h2kpnv4jzbjr-6, decimal) ". ";
        }
        ol.lst-kix_5ml2cc36nd8t-8 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-4.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-4 0;
        }
        .lst-kix_h2kpnv4jzbjr-7 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-7;
        }
        .lst-kix_h2kpnv4jzbjr-1 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-1;
        }
        ol.lst-kix_h2kpnv4jzbjr-3.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-3 0;
        }
        ol.lst-kix_5ml2cc36nd8t-1.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-1 0;
        }
        .lst-kix_5ml2cc36nd8t-5 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-5;
        }
        ol.lst-kix_h2kpnv4jzbjr-7.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-7 0;
        }
        .lst-kix_h2kpnv4jzbjr-8 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-8;
        }
        ol.lst-kix_5ml2cc36nd8t-8.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-8 0;
        }
        .lst-kix_5ml2cc36nd8t-4 > li {
          counter-increment: lst-ctn-kix_5ml2cc36nd8t-4;
        }
        .lst-kix_h2kpnv4jzbjr-2 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-2;
        }
        ol.lst-kix_h2kpnv4jzbjr-0.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-0 0;
        }
        .lst-kix_h2kpnv4jzbjr-0 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-0;
        }
        .lst-kix_h2kpnv4jzbjr-3 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-3;
        }
        ol.lst-kix_5ml2cc36nd8t-0.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-0 0;
        }
        ol.lst-kix_h2kpnv4jzbjr-6.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-6 0;
        }
        ol.lst-kix_h2kpnv4jzbjr-2.start {
          counter-reset: lst-ctn-kix_h2kpnv4jzbjr-2 0;
        }
        .lst-kix_h2kpnv4jzbjr-6 > li {
          counter-increment: lst-ctn-kix_h2kpnv4jzbjr-6;
        }
        ol.lst-kix_h2kpnv4jzbjr-8 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-7 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-6 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-5 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-4 {
          list-style-type: none;
        }
        ol.lst-kix_5ml2cc36nd8t-7.start {
          counter-reset: lst-ctn-kix_5ml2cc36nd8t-7 0;
        }
        ol.lst-kix_h2kpnv4jzbjr-3 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-2 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-1 {
          list-style-type: none;
        }
        ol.lst-kix_h2kpnv4jzbjr-0 {
          list-style-type: none;
        }
        ol {
          margin: 0;
          padding: 0;
        }
        table td,
        table th {
          padding: 0;
        }
        .c4 {
          border-right-style: solid;
          padding: 5pt 5pt 5pt 5pt;
          border-bottom-color: #000000;
          border-top-width: 1pt;
          border-right-width: 1pt;
          border-left-color: #000000;
          vertical-align: top;
          border-right-color: #000000;
          border-left-width: 1pt;
          border-top-style: solid;
          background-color: #f3f3f3;
          border-left-style: solid;
          border-bottom-width: 1pt;
          width: 304.5pt;
          border-top-color: #000000;
          border-bottom-style: solid;
        }
        .c10 {
          border-right-style: solid;
          padding: 5pt 5pt 5pt 5pt;
          border-bottom-color: #000000;
          border-top-width: 1pt;
          border-right-width: 1pt;
          border-left-color: #000000;
          vertical-align: top;
          border-right-color: #000000;
          border-left-width: 1pt;
          border-top-style: solid;
          background-color: #f3f3f3;
          border-left-style: solid;
          border-bottom-width: 1pt;
          width: 52.5pt;
          border-top-color: #000000;
          border-bottom-style: solid;
        }
        .c8 {
          border-right-style: solid;
          padding: 5pt 5pt 5pt 5pt;
          border-bottom-color: #000000;
          border-top-width: 1pt;
          border-right-width: 1pt;
          border-left-color: #000000;
          vertical-align: top;
          border-right-color: #000000;
          border-left-width: 1pt;
          border-top-style: solid;
          background-color: #f3f3f3;
          border-left-style: solid;
          border-bottom-width: 1pt;
          width: 111pt;
          border-top-color: #000000;
          border-bottom-style: solid;
        }
        .c12 {
          color: #666666;
          font-weight: 700;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 15pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c0 {
          color: #000000;
          font-weight: 400;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 11pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c17 {
          padding-top: 0pt;
          padding-bottom: 16pt;
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        .c14 {
          color: #000000;
          font-weight: 400;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 14pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c7 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.15;
          orphans: 2;
          widows: 2;
          text-align: left;
          height: 11pt;
        }
        .c21 {
          color: #666666;
          font-weight: 400;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 15pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c9 {
          color: #000000;
          font-weight: 700;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 14pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c5 {
          color: #000000;
          font-weight: 700;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 11pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c22 {
          padding-top: 0pt;
          padding-bottom: 3pt;
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: center;
        }
        .c19 {
          color: #000000;
          font-weight: 400;
          text-decoration: none;
          vertical-align: baseline;
          font-size: 26pt;
          font-family: "Arial";
          font-style: normal;
        }
        .c6 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1.15;
          orphans: 2;
          widows: 2;
          text-align: center;
        }
        .c20 {
          -webkit-text-decoration-skip: none;
          color: #1155cc;
          text-decoration: underline;
          text-decoration-skip-ink: none;
          font-size: 14pt;
        }
        .c18 {
          margin-left: auto;
          border-spacing: 0;
          border-collapse: collapse;
          margin-right: auto;
        }
        .c3 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1;
          text-align: right;
        }
        .c2 {
          padding-top: 0pt;
          padding-bottom: 0pt;
          line-height: 1;
          text-align: left;
        }
        .c13 {
          background-color: #ffffff;
          max-width: 468pt;
          padding: 72pt 72pt 72pt 72pt;
        }
        .c16 {
          color: inherit;
          text-decoration: inherit;
        }
        .c11 {
          margin-left: 36pt;
          text-indent: -18pt;
        }
        .c15 {
          font-weight: 700;
        }
        .c1 {
          height: 0pt;
        }
        .title {
          padding-top: 0pt;
          color: #000000;
          font-size: 26pt;
          padding-bottom: 3pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        .subtitle {
          padding-top: 0pt;
          color: #666666;
          font-size: 15pt;
          padding-bottom: 16pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        li {
          color: #000000;
          font-size: 11pt;
          font-family: "Arial";
        }
        p {
          margin: 0;
          color: #000000;
          font-size: 11pt;
          font-family: "Arial";
        }
        h1 {
          padding-top: 20pt;
          color: #000000;
          font-size: 20pt;
          padding-bottom: 6pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        h2 {
          padding-top: 18pt;
          color: #000000;
          font-size: 16pt;
          padding-bottom: 6pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        h3 {
          padding-top: 16pt;
          color: #434343;
          font-size: 14pt;
          padding-bottom: 4pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        h4 {
          padding-top: 14pt;
          color: #666666;
          font-size: 12pt;
          padding-bottom: 4pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        h5 {
          padding-top: 12pt;
          color: #666666;
          font-size: 11pt;
          padding-bottom: 4pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
        h6 {
          padding-top: 12pt;
          color: #666666;
          font-size: 11pt;
          padding-bottom: 4pt;
          font-family: "Arial";
          line-height: 1.15;
          page-break-after: avoid;
          font-style: italic;
          orphans: 2;
          widows: 2;
          text-align: left;
        }
      </style>
    </head>
    <body class="c13">
      <p class="c22 title" id="h.zeyfig9nyfnv">
        <span class="c19">Welcome to Hardware at Curbside</span>
      </p>
      <p class="c7"><span class="c0"></span></p>
      <p class="c17 subtitle" id="h.5950j18wwodf">
        <span class="c15">Up-sell Items:</span>
      </p>
      <a id="t.bb0d4eba18c125f5c4843aa3cf08f323fe75ebf3"></a><a id="t.0"></a>
      <table class="c18">
        <tbody>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3"><span class="c5">Item No.</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c5">Item</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c5">Unit Price</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3"><span class="c0">1</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Dustbin</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">04.90 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">2</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Snow Shovel</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">10.50 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">3</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Garbage Container</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">12.30 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">4</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Light Bulb</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">01.20 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">5</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Furnace Cleaner</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">06.70 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">6</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Headlamp</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">14.99 $</span></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="c7"><span class="c0"></span></p>
      <p class="c17 subtitle" id="h.7tur519wa0s9">
        <span class="c12">Extras:</span>
      </p>
      <a id="t.728a916740752879ff23ef9ecaae43620c5a34c2"></a><a id="t.1"></a>
      <table class="c18">
        <tbody>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3"><span class="c5">Item No.</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c5">Item</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c5">Unit Price</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3"><span class="c0">1</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Screws</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">00.10 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">2</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Nails</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">00.12 $</span></p>
            </td>
          </tr>
          <tr class="c1">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c3 c11"><span class="c0">3</span></p>
            </td>
            <td class="c4" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">Tapes</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c2"><span class="c0">02.20 $</span></p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="c7"><span class="c0"></span></p>
      <p class="c7"><span class="c0"></span></p>
      <p class="c6"><span class="c9">HST applicable @ 13%.</span></p>
      <p class="c7"><span class="c0"></span></p>
      <p class="c6"><span class="c14">Order now at: </span></p>
      <p class="c6">
        <span class="c15 c20"
          ><a
            class="c16"
            href="https://hardware-curbside.herokuapp.com/" target="_blank">https://hardware-curbside.herokuapp.com/</a
          ></span
        >
      </p>
    </body>
  </html>
  
      `;
  }
};
