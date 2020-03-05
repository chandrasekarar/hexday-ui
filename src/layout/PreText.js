import React from 'react';


const PreText = (props) => (
    <>
        <div className="row">
            <div><h3>Request body</h3></div>
            <div className="code-column">
                <pre>
                    {
                        `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:cor="http://www.caqh.org/SOAP/WSDL/CORERule2.2.0.xsd">
                                <soapenv:Header/>
                                <soapenv:Body>
                                   <cor:realTimeTransaction>
                                      <body>
                                         <PayloadType>X12 270 Request 005010X279A1</PayloadType>
                                         <ProcessingMode>RealTime</ProcessingMode>
                                         <PayloadID>12121</PayloadID>
                                         <TimeStamp>2019-02-16T10:20:34Z</TimeStamp>
                                         <SenderID>EMDEON</SenderID>
                                         <ReceiverID>XXXX</ReceiverID>
                                         <CORERuleVersion>2.2.0</CORERuleVersion>
                                         <Payload>
                                                     ISA*00* *00* *ZZ*123456789 *ZZ*999888777 *130813*1402*^*00501*240740115*0*T*:~
                                                                             GS*HS*123456789*999888777*20180113*1402*240740115*X*005010X279~
                                                                             ST*270*240740115*005010X279~
                                                                             BHT*0022*13*240740115*20180113*1402~
                                                                             HL*1**20*1~
                                                                             NM1*PR*2*PHIC*****PI*52-8070835~
                                                                             HL*2*1*21*1~
                                                                             NM1*1P*2*Default BlueCard Home Supplier*****XX*HCCDEFAULTSUPP1~
                                                                             HL*3*2*22*1~
                                                                             TRN*1*DDPA-APINTSTAG2.DELTADENTAL.COM-1556222760118-0*9DDPA-DDNP~
                                                                             NM1*IL*1*LILES*PAUL****MI*NED692879829~
                                                                             REF*6P*ACCOUNT_1582009149013607293~
                                                                             DMG*D8*19500101*M~
                                                                             EQ*30~
                                                                             SE*17*0001~
                                                                             GE*1*240740115~
                                                                             IEA*1*240740115~
                                             </Payload>
                                      </body>
                                   </cor:realTimeTransaction>
                                </soapenv:Body>
                             </soapenv:Envelope>`
                    }
                </pre>
            </div>
        </div>

        <div className="hex-devider">
        </div>

        <div className="row">
            <div><h3>Response body</h3></div>
            <div className="code-column">
                <pre>
                    {
                        `<S:Envelope xmlns:env="http://schemas.xmlsoap.org/soap/envelope/" xmlns:S="http://schemas.xmlsoap.org/soap/envelope/">
                                <env:Header/>
                                <S:Body>
                                   <ns2:realTimeTransactionResponse xmlns:ns3="http://healthedge.com" xmlns:ns2="http://www.caqh.org/SOAP/WSDL/CORERule2.2.0.xsd">
                                      <COREEnvelopeRealTimeResponse>
                                         <PayloadType>X12_271_Response_005010X279A1</PayloadType>
                                         <ProcessingMode>RealTime</ProcessingMode>
                                         <PayloadID>12121</PayloadID>
                                         <TimeStamp>2020-03-05 02:34:15.487</TimeStamp>
                                         <SenderID>XXXX</SenderID>
                                         <ReceiverID>EMDEON</ReceiverID>
                                         <CORERuleVersion>2.2.0</CORERuleVersion>
                                         <Payload>ISA*00*          *00*          *ZZ*999888777      *ZZ*123456789      *200305*0234*^*00501*392132745*0*T*:~
                             GS*HB*999888777*123456789*20200304*045900*100000001*X*005010X279A1~
                             ST*271*392132745*005010X279A1~
                             BHT*0022*11*240740115*20180113*140200~
                             HL*1**20*1~
                             NM1*PR*2*PHIC*****PI*52-8070835~
                             PER*IC*John Doe*EM*john.m.doe@healthedge.com*TE*7812851300~
                             HL*2*1*21*1~
                             NM1*1P*2*Default BlueCard Home Supplier*****XX*HCCDEFAULTSUPP1~
                             PRV*SB~
                             HL*3*2*22*0~
                             TRN*2*DDPA-APINTSTAG2.DELTADENTAL.COM-1556222760118-0*9DDPA-DDNP~
                             NM1*IL*1*LILES*PAUL****MI*692879829-00~
                             REF*6P*ACCOUNT_1582009149013607293~
                             REF*Q4*NED692879829~
                             N3*3948 High Pine Rd~
                             N4*Jacksonville*FL*32225~
                             DMG*D8*19500101*M~
                             INS*Y*18*001*25~
                             DTP*346*D8*20010101~
                             DTP*347*D8*30000101~
                             EB*1*FAM*30**Marine Tibbs's Insurance Company BENEFITPLAN_15820~
                             EB*U**48~
                             EB*U**35~
                             EB*U**47~
                             EB*U**33~
                             EB*U**88~
                             EB*U**86~
                             EB*U**98~
                             EB*U**50~
                             EB*U**MH~
                             EB*U**1~
                             EB*U**UC~
                             EB*U**AL~
                             SE*33*392132745~
                             GE*1*100000001~
                             IEA*1*392132745~</Payload>
                                         <ErrorCode>Success</ErrorCode>
                                         <ErrorMessage>No errors</ErrorMessage>
                                      </COREEnvelopeRealTimeResponse>
                                   </ns2:realTimeTransactionResponse>
                                </S:Body>
                             </S:Envelope>`
                    }
                </pre>
            </div>
        </div>
    </>
)

export default PreText