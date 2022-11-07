import React from "react";
import { Link } from "react-router-dom";

const FaqContent = () => {
  return (
    <>
      <div className="ltn__faq-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Customer Support
                </h6> */}
                <h1 className="section-title">Frequently Asked Questions</h1>
              </div>
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      What is a blockchain?
                    </h6>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          A blockchain is a decentralized database that is
                          shared among computer network nodes. A blockchain acts
                          as a database, storing information in a digital
                          format. Blockchains are well known for their critical
                          role in keeping a secure and decentralized record of
                          transactions in cryptocurrency systems like Bitcoin
                          and Ethereum. The blockchain's novelty is that it
                          ensures the fidelity and security of a data record
                          while also generating trust without the requirement
                          for a trusted third party.
                        </p>
                        <ul>
                          <li>
                            Blockchain is a type of shared database that differs
                            from traditional databases in the way it is stored:
                            data is stored in blocks, which are then connected
                            together via cryptography.
                          </li>
                          <li>
                            <li>
                              As new information is received, it is entered into
                              a new block. Once the block has been filled with
                              data, it is chained onto the previous block,
                              forming a chronological chain of data.
                            </li>
                            <li>
                              A blockchain can hold a variety of data, but the
                              most prevalent application so far has been as a
                              transaction ledger.
                            </li>

                            <li>
                              In the case of Bitcoin, blockchain is employed in
                              a decentralized manner, meaning that no single
                              person or group has power—rather, all users have
                              control collectively
                            </li>

                            <li>
                              Decentralized blockchains are immutable, meaning
                              that the data inputted cannot be changed. This
                              means that transactions in Bitcoin are forever
                              recorded and accessible to everybody.
                            </li>

                            <li>
                              Blockchain technology is also exciting because it
                              has many uses beyond cryptocurrency
                            </li>

                            <li>
                              Blockchains are being used to explore medical
                              research, improve the accuracy of healthcare
                              records, streamline supply chains, IoT, Real
                              Estate and so much more
                            </li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* 2 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="false"
                    >
                      Top blockchain benefits
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          In fact, whether employing a public blockchain network
                          or private or permissioned blockchain-based apps,
                          blockchain and its properties can give many benefits
                          to enterprises
                        </p>
                        <ul>
                          <li>
                            Trust: Where trust is either non-existent or
                            unproven, blockchain generates trust amongst
                            multiple entities. As a result, these businesses are
                            willing to engage in transactions or data sharing
                            that they might not have done otherwise or that
                            would have required the use of an intermediary
                          </li>
                          <li>
                            <li>
                              Reduced costs: The nature of blockchain can also
                              help businesses save money. It improves
                              transaction processing efficiency. It also
                              simplifies reporting and auditing operations by
                              reducing manual duties such as data aggregation
                              and amendment.
                            </li>
                            <li>
                              Speed: Blockchain can handle transactions
                              substantially faster than traditional techniques
                              since it eliminates intermediaries and replaces
                              remaining human processes in transactions. In some
                              situations, a transaction on the blockchain can be
                              completed in seconds or less.
                            </li>

                            <li>
                              Immutability: Immutability basically means that
                              transactions can't be modified or deleted after
                              they've been recorded on the blockchain. All
                              transactions on the blockchain are timestamped and
                              date-stamped, resulting in a permanent record.
                            </li>

                            <li>
                              Tokenization: Tokenization is the process of
                              converting the value of a real or digital asset
                              into a digital token, which is then stored on and
                              shared via blockchain.
                            </li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* 3 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      What is the mechanism behind blockchain?
                    </h6>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The purpose of blockchain is to enable for the
                          recording and distribution of digital data without the
                          ability to modify it. In this sense, a blockchain
                          serves as the foundation for immutable ledgers, or
                          transaction records that can't be changed, erased, or
                          destroyed. Blockchains are also known as distributed
                          ledger technology because of this (DLT). The
                          blockchain concept was first presented as a research
                          project in 1991, and it before its first popular use
                          in use, Bitcoin, in 2009. The creation of numerous
                          cryptocurrencies, decentralized finance (DeFi)
                          applications, non-fungible tokens (NFTs), and smart
                          contracts has skyrocketed the use of blockchains in
                          the years thereafter.
                        </p>
                        <ul>
                          <li>
                            Step 1): A transaction is requested by someone.
                            Cryptocurrency, contracts, records, or other
                            information could be involved in the transaction.
                          </li>
                          <li>
                            <li>
                              Step 2) With the help of nodes, the requested
                              transaction is broadcasted to a P2P network.
                            </li>
                            <li>
                              Step 3) Using well-known techniques, the network
                              of nodes confirms/validate the transaction and the
                              user's status.
                            </li>

                            <li>
                              Step 4) The new block is then added to the
                              existing blockchain after the transaction is
                              complete. In a way that is both permanent and
                              unchangeable.
                            </li>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 4 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      Blockchain versions
                    </h6>
                    <div
                      id="faq-item-2-4"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Blockchain 1.0 Currency: The use of DLT (distributed
                          ledger technology) led to the earliest and most
                          visible use of the technology: cryptocurrencies. This
                          makes it possible to conduct financial transactions
                          using blockchain technology. It's a money and a
                          payment system. The most well-known example in this
                          category is Bitcoin. Blockchain 2.0 Smart Contracts:
                          Smart Contracts, which are little computer programs
                          that "live" in the blockchain, are the next essential
                          principles. They are open-source computer programs
                          that run in the background and check for criteria such
                          as facilitation, verification, and enforcement. It's a
                          contract that's utilised to replace regular contracts.
                          Blockchain 3.0 DApps: The term "decentralized
                          application" is abbreviated as "DApps." Its backend
                          code is distributed throughout a decentralized
                          peer-to-peer network. A DApp, like a standard App, can
                          have frontend Blockchain example code and user
                          interfaces written in any language that can call its
                          backend
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 5 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      Who invented the blockchain?
                    </h6>
                    <div
                      id="faq-item-2-5"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          In late 2008, Nakamoto published a whitepaper
                          detailing the principles behind Bitcoin, a new type of
                          digital currency. Since then, every cryptocurrency
                          (Bitcoin or Altcoin) has evolved from the ideas
                          outlined in that paper. Nakamoto's goal was to create
                          digital money that would allow two strangers anywhere
                          in the world to transact online without the need for a
                          third-party intermediary such as a credit card company
                          or a payment processor like Paypal. This necessitated
                          a system that would remove a vexing problem known as
                          "double spending," in which a person may spend the
                          same money multiple times. The solution is a network
                          that constantly verifies Bitcoin's travel. The
                          blockchain is that network.
                        </p>
                        <p>
                          Every Bitcoin transaction is stored and verified by a
                          global network of computers that is independent of any
                          individual, business, or country. The blockchain is
                          the database that stores all of this information.
                          Bitcoins are mined through a massive, decentralized
                          (also known as peer-to-peer) network of computers that
                          is constantly verifying and securing the blockchain's
                          accuracy. Miners are rewarded with small amounts of
                          cryptocurrency in exchange for contributing their
                          computing power to the blockchain. Every single
                          bitcoin transaction is recorded on the ledger, with
                          fresh information periodically accumulated in a
                          "block" that is added to the previous blocks. The
                          miners' combined computational power is used to ensure
                          the ledger's accuracy as it grows. Bitcoin cannot
                          exist without the blockchain; every new bitcoin, as
                          well as every subsequent transaction involving all
                          existing currencies, is recorded on it.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 6 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      What does the future hold for blockchain technology?
                    </h6>
                    <div
                      id="faq-item-2-6"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The blockchain concept has proven to be a foundation
                          on which a wide range of applications can be built.
                          Although blockchain is still a young and fast evolving
                          technology, many experts have compared its potential
                          to transform the way we live and work to that of
                          public internet protocols like HTML in the early days
                          of the World Wide Web. The global cryptocurrency
                          market cap reached $3 trillion at the end of 2021, an
                          all-time high. Blockchain technology underpins
                          cryptocurrencies such as Bitcoin and Ethereum. The
                          adoption of blockchain, as well as the technology and
                          products that it supports, will continue to have a
                          significant impact on company operations. However,
                          blockchain technology is much more than a mechanism
                          for sending and receiving cryptocurrency in a safe
                          manner. It can be utilized in a variety of
                          applications outside of finance, including healthcare,
                          real estate, insurance, voting, social benefits,
                          gaming, green energy, and artist royalties. The global
                          economy is prepared for the blockchain revolution,
                          with technology already having an impact on business
                          and society on many levels.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 7 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-7"
                      aria-expanded="false"
                    >
                      What is SmartCrowd?
                    </h6>
                    <div
                      id="faq-item-2-7"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd is a decentralized real estate investment
                          platform that simplifies the process investment in
                          real estate market. Our goal is to make real estate
                          investment options more accessible to the general
                          public, selected by a team of real estate
                          professionals across the world.
                        </p>
                        <p>
                          Digital tokens on the Ethereum blockchain are used to
                          represent ownership of these real estate properties.
                          Paper deeds contracts which were used to define
                          ownership in most real estate properties are now
                          replaced by Smart Contracts by SmartCrowd, which uses
                          revolutionary asset ownership method based on the
                          Ethereum blockchain that replaces paper deeds with
                          digital tokens.
                        </p>
                        <p>
                          The conversion of a paper deed into a digital token
                          has a number of advantages in real estate ownership,
                          which are discussed in more depth elsewhere on the
                          Wiki.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 8 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-8"
                      aria-expanded="false"
                    >
                      What is the difference between SmartCrowd and
                      SmartCrowdTokens?
                    </h6>
                    <div
                      id="faq-item-2-8"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd is the name of the company. The term
                          "SmartCrowd" is a combination of the words "smart
                          contract," "property crowd," and "token."
                        </p>
                        <p>
                          SmartCrowdTokens are a tradable asset that serve as a
                          digital representation of ownership in the LLC that
                          holds the property deed. Each SmartCrowd property has
                          its own set of SmartCrowdTokens connected with it.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 9 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-9"
                      aria-expanded="false"
                    >
                      What’s the difference between SmartCrowdToken Inc. and
                      SmartCrowdoken LLC?
                    </h6>
                    <div
                      id="faq-item-2-9"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Our company is called SmartCrowd Token Inc., and it is
                          a Delaware-registered commercial entity. SmartCrowd is
                          how we refer to it, and how we can say we're doing
                          business with it.
                        </p>
                        <p>
                          SmartCrowd has established a new organization,
                          SmartCrowd Token LLC, which is likewise Delaware
                          registered, in order to conduct business and market
                          real estate globally. It's a master, or umbrella,
                          firm, if you will. It does not own any other LLCs or
                          corporate entities, nor does it possess any real
                          estate. Its major purpose is to simplify and reduce
                          the time and expense of supplying what US authorities
                          consider to be an investment security offering, which
                          each of the properties we sell is considered to be.
                          (Instead of a roughly 100-page private placement
                          memorandum for each offering, one master ppm is
                          necessary, and each subsequent offering simply
                          requires a significantly shorter update.)
                        </p>
                        <p>
                          Finally, we create a Series LLC for each offering,
                          each of which owns a single asset (a property) and has
                          its own token and address. Each stand solely and
                          legally on its own, and is not cross-collateralized
                          with, or influenced in any way by, any other series
                          LLC. Each is held by the investors who purchased its
                          unique tokens and are ultimately responsible for its
                          governance.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 10 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-10"
                      aria-expanded="false"
                    >
                      What exactly is a token? What is the meaning of the term
                      "tokenization"?
                    </h6>
                    <div
                      id="faq-item-2-10"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Tokens on Ethereum can be used to represent almost
                          anything, depending on the token's issuer. This is how
                          Ethereum allows real-world assets like real estate,
                          cash, and gold to be traded, invested, borrowed, and
                          lent.
                        </p>
                        <p>
                          A piece of paper is usually used to demonstrate asset
                          ownership. This piece of paper serves as a
                          representation of the asset's ownership. Like in case
                          of House or Building: a paper deed, Car: a paper
                          title, Stock: a paper certificate, Bond : a paper
                          treasury note and Cash: a paper dollar/euro/peso. A
                          'token,' on the other hand, is a digital symbol of
                          ownership. You own a token on Ethereum in the same way
                          you own a property deed. The piece of paper isn't
                          inherently valuable; it merely serves as a sign of
                          possession.
                        </p>
                        <p>
                          A token is a type of digital asset. The first digital
                          token was Bitcoin. A token is a digital asset that can
                          only be used online. Tokens, unlike most other files,
                          photos, or data on computers or the internet, can't be
                          copied. You can't maintain a copy of a token you send
                          to someone. The blockchain, cryptocurrency, and
                          crypto-asset worlds use the term 'token.' A 'token' is
                          a representation of ownership. What that thing 'is' is
                          extremely adaptable. Some tokens denote US dollars in
                          crypto world like USDT or USDC, while others denote
                          gold. Cryptocurrencies such as Bitcoin and Ether are
                          tokens in and of themselves.
                        </p>
                        <p>
                          The practise of declaring ownership over anything as
                          ownership in a digital token on Ethereum is known as
                          tokenization. Companies like Circle has created
                          tokenized dollars, Paxos has created tokenized gold,
                          and now SmartCrowd has created tokenized real estate.
                        </p>
                        <p>
                          Tokenization is the process by which a 'off-chain
                          asset' is transformed into a 'on-chain asset.' Being
                          incorporated in the Ethereum blockchain is referred to
                          as being "on-chain." This is a procedure that
                          necessitates legal framework and compliance and is
                          unique to each jurisdiction and asset class.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 11 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-11"
                      aria-expanded="false"
                    >
                      What are the advantages of tokenized real estate property?
                    </h6>
                    <div
                      id="faq-item-2-11"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd is a company that sells real estate through
                          the internet, allowing people to buy property from
                          almost anywhere in the globe. Because SmartCrowd
                          properties can be fractionalized, which means that,
                          interested investors can invest whatever amount that
                          meets their demands. SmartCrowd has also decreased the
                          time it takes to buy real estate from a minimum of
                          30-40 days (with multiple stages involving third
                          parties) to only 10 minutes and on your phone or
                          computer.
                        </p>
                        <p>
                          Real estate investments can now be made inexpensive to
                          almost anybody thanks to tokenization. A single
                          SmartCrowd property token costs between $50 and $150,
                          which are the lowest investment minimums available in
                          the real estate business. Traditional pen-and-paper
                          competitors to SmartCrowd have investment minimums
                          ranging from $5,000 to $10,000.
                        </p>
                        <p>
                          Real estate is also known for its illiquidity. Because
                          of the fractionalization of the tokens and the
                          potential reach of internet-based markets, real estate
                          may be accessed by a far larger number of potential
                          buyers by converting it into digital tokens. The more
                          market players that digital tokens can reach, the more
                          liquid real estate becomes. Furthermore, Ethereum (and
                          xDai) financial apps provide ways for obtaining
                          liquidity for valued tokenized assets.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 12 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-12"
                      aria-expanded="false"
                    >
                      How can SmartCrowd be able to offer US securities?
                    </h6>
                    <div
                      id="faq-item-2-12"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd sell SmartCrowdTokens under two Act
                          exemptions: one to US Accredited Investors, as
                          specified by Regulation D of the Act, and the other to
                          non-US people, as described by Regulation S of the
                          Act.
                        </p>
                        <p>
                          To comply with the Act's rules and exemptions, we must
                          offer full, fair, and accurate information of all
                          aspects of your purchase and ownership of a
                          SmartCrowdToken, including risks and restrictions on
                          transferability and resale, so you can make an
                          informed investment decision.
                        </p>
                        <p>
                          Our commitment to satisfy US securities'
                          world-renowned standards and your investment needs is
                          backed up by our detailed Private Placement
                          Memorandum, Subscription Documentation, and commitment
                          to provide ongoing property operating results and
                          market evaluation relative to each SmartCrowdToken
                          offering.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 13 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-13"
                      aria-expanded="false"
                    >
                      What criteria are used to choose properties for inventory?
                    </h6>
                    <div
                      id="faq-item-2-13"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          For SmartCrowd's consumers to invest in, our team of
                          highly experienced real estate investors meticulously
                          curates real estate possibilities in the United
                          States.
                        </p>
                        <p>
                          Large apartment buildings in popular regions will be
                          mixed in with low-cost single-family homes, all with
                          high rental rates. Each one has been renovated,
                          brought up to code, had all taxes and utilities paid
                          up to date, and has been rented to eligible renters.
                        </p>
                        <p>To get started, go to our marketplace</p>
                      </div>
                    </div>
                  </div>

                  {/* 14 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-14"
                      aria-expanded="false"
                    >
                      Is the SmartCrowd platform exclusive to residential real
                      estate?
                    </h6>
                    <div
                      id="faq-item-2-14"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd chose residential family properties as its
                          first investment due to its appeal to international
                          investors. On the other hand, in order to provide a
                          broader set of offerings (for all types of properties)
                          to our consumers, SmartCrowd is now working on adding
                          commercial assets, such as hotels and office
                          complexes.
                        </p>
                        <p>
                          SmartCrowd also has the ability to add non-real estate
                          and real estate assets in its portfolio. Loans,
                          mortgages, and high-value art are all potential assets
                          that SmartCrowd can tokenize.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 15 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-15"
                      aria-expanded="false"
                    >
                      Who is the owner of the house deed?
                    </h6>
                    <div
                      id="faq-item-2-15"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The physical asset is not tokenized by SmartCrowd. It
                          is currently illegal to use tokenization to directly
                          determine real estate ownership.
                        </p>
                        <p>
                          SmartCrowd tokenizes ownership rights in a Limited
                          Liability Company (LLC) that is the only owner of the
                          asset being purchased. Each asset will be owned by a
                          single limited liability company (LLC). Tokens
                          represent ownership of a membership stake in the LLC,
                          which is embedded in the subscription agreement and
                          ownership records, making it irreversible.
                        </p>
                        <p>
                          The LLC owns the deed to each property. Buying
                          SmartCrowdokens for an LLC that holds a single
                          property deed is the same as buying your share of that
                          deed.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 16 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-16"
                      aria-expanded="false"
                    >
                      How can we ensure that each LLC has the deed to the
                      property it owns?
                    </h6>
                    <div
                      id="faq-item-2-16"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Attorneys handle the buy and sale transaction and
                          paperwork between the seller and the LLC, which we
                          trust. The transfer of deed is included in the papers,
                          as well as a filing in the proper jurisdiction
                        </p>
                        <p>
                          After that, the documentation is submitted with an
                          independent escrow agency, who keeps the papers for
                          the LLC.
                        </p>
                        <p>
                          Escrow arrangements are governed by strict laws in the
                          United States, which we are happy to follow
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 17 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-17"
                      aria-expanded="false"
                    >
                      Who is responsible for managing the properties?
                    </h6>
                    <div
                      id="faq-item-2-17"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Property Management is outsourced by SmartCrowd to
                          local professionals. Of course, we continue to closely
                          monitor and care for each of the Token Holders'
                          properties
                        </p>
                        <p>
                          SmartCrowd's property management businesses are in
                          charge of renting out the property, collecting rental
                          income, and maintaining or repairing it.
                        </p>
                        <p>
                          The rental income received to SmartCrowdToken holders
                          is reduced by costs linked with property management
                          and maintenance.
                        </p>
                        <p>
                          For two reasons, we elected to outsource property
                          management: It frees up resources so that SmartCrowd
                          may focus on what it does best —- Property management
                          is a time-consuming endeavor. As we expand, we plan to
                          provide properties around the United States and other
                          nations.
                        </p>
                        <p>
                          We do, however, keep a close eye on all elements of
                          the properties, from rent and rental prices to
                          physical conditions, restorations, code compliance,
                          and even landscaping upgrades where appropriate.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 18 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-18"
                      aria-expanded="false"
                    >
                      What happens if SmartCrowd fails to make a profit and go
                      out of business?
                    </h6>
                    <div
                      id="faq-item-2-18"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Our management, SmartCrowd (SmartCrowdToken Inc.), is
                          not a limited liability company (LLC) that owns the
                          asset in which you are investing.
                        </p>
                        <p>
                          For property holding, tax, accounting, liability, and
                          member ownership reasons, each LLC would continue to
                          operate as a separate legal organization. Whatever
                          happens to SmartCrowdToken Inc., an LLC's assets and
                          SmartCrowdTokens will remain separate and unaffected.
                        </p>
                        <p>
                          The SmartCrowdTokens would continue to represent and
                          evidence ownership of the LLC's property and, as such,
                          could be traded in the market as needed, as long as
                          applicable securities transfer requirements are
                          followed.
                        </p>
                        <p>
                          As a result, you retain ownership of your tokens! If
                          SmartCrowd Inc. is liquidated (which is not the
                          intention, to be clear!), a new Managing Member will
                          be selected. This could be a temporary lawyer, an
                          accountant, or even the most powerful Holder, for
                          example.
                        </p>
                        <p>
                          SmartCrowd will integrate a governance system in the
                          future to simplify all of these decision-making
                          processes and allow full participation of
                          TokenHolders.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 19 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-19"
                      aria-expanded="false"
                    >
                      What if the tenant fails to pay the rent?
                    </h6>
                    <div
                      id="faq-item-2-19"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowdToken holders are only paid when rent is
                          collected from tenant. If the tenant does not pay the
                          rent, there will be no rent to distribute to token
                          holders. However, if a tenant fails to pay rent, then
                          the property management company will also get unpaid
                          for their services, because the property management
                          company will only be paid in those months when there
                          is a tenant in the property. Plus an immediate action
                          will be taken as If a tenant defaults on their rent,
                          they will be evicted and replaced with a more
                          creditworthy tenant.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 20 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-20"
                      aria-expanded="false"
                    >
                      What if the tenant fails to pay the rent?
                    </h6>
                    <div
                      id="faq-item-2-20"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowdToken holders are only paid when rent is
                          collected from tenant. If the tenant does not pay the
                          rent, there will be no rent to distribute to token
                          holders. However, if a tenant fails to pay rent, then
                          the property management company will also get unpaid
                          for their services, because the property management
                          company will only be paid in those months when there
                          is a tenant in the property. Plus an immediate action
                          will be taken as If a tenant defaults on their rent,
                          they will be evicted and replaced with a more
                          creditworthy tenant.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 21 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-21"
                      aria-expanded="false"
                    >
                      Who is eligible to invest with SmartCrowd?
                    </h6>
                    <div
                      id="faq-item-2-21"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          SmartCrowd is a platform that allows nearly anyone to
                          invest in real estate. SmartCrowd accepts citizens
                          from Europe, North and South America, and the majority
                          of Asian nations to sign up and invest. The only
                          countries that SmartCrowd does NOT work with are the
                          following: Belarus, Burma, Burundi, Central African
                          Republic, Cuba, Democratic Republic of Congo, Iran,
                          Iraq, Lebanon, Libya, Mali, Nicaragua, North Korea,
                          Somalia, South Sudan, Sudan, Syria, Venezuela, Yemen,
                          Zimbabwe and U.S. INVESTORS
                        </p>
                        <p>
                          SmartCrowd is currently only available to accredited
                          US investors. You may see if you are an accredited
                          investor in the United States by clicking HERE. All
                          U.S. investors will have access to the SmartCrowd
                          platform, according to SmartCrowd's goal and strategy.
                          Please bear with us as we work through the regulatory
                          and compliance issues that are preventing us from
                          doing so!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 22 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-22"
                      aria-expanded="false"
                    >
                      How much money do I need to invest?
                    </h6>
                    <div
                      id="faq-item-2-22"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Real estate investments can now be made inexpensive to
                          practically anybody thanks to tokenization. A single
                          SmartCrowd property token cost between $50 to $150
                          each, which is the lowest minimum investment available
                          in the real estate market.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 23 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-23"
                      aria-expanded="false"
                    >
                      What is the procedure of purchase? How much time does it
                      take?
                    </h6>
                    <div
                      id="faq-item-2-23"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The method of purchasing tokenized real estate is
                          simple! There are, however, a few steps that must be
                          completed beforehand.
                        </p>
                        <ul>
                          <li>Submit a copy of your ID for verification.</li>
                        </ul>
                        <p>
                          The first step is to create a user account and upload
                          a photo of your ID, a selfie, and your desired
                          Ethereum/Gnosis Chain* wallet address.
                        </p>
                        <p>
                          *ERC20 compatible addresses that you own must be
                          excluded, as well as Coinbase, Binance, Swissborg, and
                          any other exchange addresses.
                        </p>
                        <ul>
                          <li>Be on the lookout</li>
                        </ul>
                        <p>
                          Sales are publicized almost 24 hours in advance via
                          our various social media platforms (our email,
                          Twitter, and Telegram announcement channel); make sure
                          to subscribe so you don't miss out! Sales are
                          publicized almost 24 hours in advance via our various
                          social media platforms (our email, Twitter, and
                          Telegram announcement channel); make sure to subscribe
                          so you don't miss out! Be on the lookout
                        </p>
                        <ul>
                          <li>Invest in real estate</li>
                        </ul>
                        <p>
                          This is the most enjoyable part! Take a look around
                          the market and decide which home you want to buy.
                          Checkout and pay with cryptocurrencies* or your credit
                          card immediately.
                        </p>
                        <p>
                          Do not be alarmed! During the first sale, 80 percent
                          of the Tokens will be available, and you will have the
                          opportunity to purchase 10% of these tokens. The
                          remaining 20% goes on sale 12 hours later, with a
                          maximum of three tokens per bidder.
                        </p>
                        <p>
                          *Cryptocurrencies that are currently compatible are
                          subject to change: BTC, LTC, ETH, DOGE, BCH, DAI, and
                          USDC are all digital currencies.
                        </p>
                        <ul>
                          <li>Fill out and sign the Purchase Agreement</li>
                        </ul>
                        <p>
                          As soon as the payment is received! After you've
                          completed the difficult part, support SmartCrowd will
                          send you an email containing the documents you need to
                          sign (within approximately 1 to 2h). These legal
                          documents link the token to the property's ownership
                          and provide more information about the legal entity
                          that owns it.
                        </p>
                        <ul>
                          <li>Please accept the token(s)!</li>
                        </ul>
                        <p>
                          After you've signed the contract, you'll need to
                          decide how you want to get your rents and tokens.
                        </p>
                        <p>
                          We recommend reading the following articles: What is
                          the procedure for receiving the token(s)? and How will
                          I be paid for my rental income?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 24 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-24"
                      aria-expanded="false"
                    >
                      What is the procedure for receiving my tokens?
                    </h6>
                    <div
                      id="faq-item-2-24"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>To receive your token(s), you have two options:</p>
                        <ul>
                          <li>
                            It will be delivered to your Gnosis Chain compatible
                            wallet.
                          </li>
                          <li>
                            It can be claimed using an Ethereum Smart Contract
                            (Gas fees at your charge).
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* 25 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-25"
                      aria-expanded="false"
                    >
                      What method do I use to obtain my rental income?
                    </h6>
                    <div
                      id="faq-item-2-25"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Your daily rent payment can be received in one of
                          three ways:
                        </p>
                        <ul>
                          <li>
                            It will be delivered to your Gnosis Chain compatible
                            wallet in USDC.
                          </li>
                          <li>
                            An Ethereum Smart Contract can be used to claim it
                            in USDC (Gas fees at your charge).
                          </li>
                          <li>
                            {" "}
                            You can reinvest automatically into the Reinvestment
                            Property.
                          </li>
                        </ul>
                        <p>
                          Rent is paid in USDC, a stable-coin with the same
                          value as a currency such as the US dollar.
                          SmartCrowdToken owners can receive their rental money
                          in a stable currency that does not fluctuate when they
                          use it.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 26 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-26"
                      aria-expanded="false"
                    >
                      Property Reinvestment
                    </h6>
                    <div
                      id="faq-item-2-26"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Any rent you owe that cannot be converted into
                          SmartCrowdTokens will be distributed according to your
                          chosen "Rent Fallback Type" when the selected Rent
                          Reinvestment property sells out. For that "Deposit to
                          Gnosis" and "Claim to Ethereum" are the current
                          possibilities.
                        </p>
                        <p>
                          In your Portfolio, you can see and edit this
                          selection.
                        </p>
                        <p>
                          By default, any outstanding rent will be made
                          available for claim on Ethereum if you do not make a
                          selection.
                        </p>
                        <p>
                          The destination of your unconverted rent will be
                          determined by the choice you chose at the time of rent
                          computation.
                        </p>
                        <p>
                          When your current reinvestment property sells out, we
                          want to provide you the option to migrate to a new
                          reinvestment property in the future.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 27 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-27"
                      aria-expanded="false"
                    >
                      How do I convert my USDC to fiat money?
                    </h6>
                    <div
                      id="faq-item-2-27"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <ol>
                          <li>Go to Levinswap with your wallet.</li>
                          <li>
                            If you don't already have USDC, convert your tokens
                            to USDC.
                          </li>
                          <li>Go to Xpollinate once you have your USDC.</li>
                          <li>
                            Select the sidechain to send to (BSC or Polygon) and
                            the tokens to send (in our example, USDC).
                          </li>
                          <li>
                            All you have to do now is pay the transaction costs
                            (in xDai).
                          </li>
                          <li>
                            Your tokens will be available on the recipient
                            sidechain after the transaction is finished.
                          </li>
                          <li>
                            . You can send your USDC to Binance and then to your
                            bank account from the BSC. You can send USDC to
                            Ascender and then to your bank account from Polygon
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  {/* 28 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-28"
                      aria-expanded="false"
                    >
                      What exactly is a "wallet"? What's the point of having
                      one?
                    </h6>
                    <div
                      id="faq-item-2-28"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          A ‘wallet’ is a core component of a
                          blockchain/cryptocurrency system. SmartCrowd accounts
                          for fractional ownership of properties on its platform
                          using the Ethereum blockchain and the Gnosis Chain.
                          Our assets are housed in 'Ethereum wallets' compatible
                          with the Gnosis Chain because we run on Ethereum.
                        </p>
                        <p>
                          A 'wallet' might alternatively be referred to as a
                          'public key' or a 'public address.'
                        </p>
                        <p>
                          A wallet is made up of two components: a "public
                          address" and a "private key." A mailbox and a mailbox
                          key are good metaphors for this. Anyone can put
                          something in the mailbox, but only the owner of the
                          private key has access to it. The connection between a
                          'public' and a 'private' key is founded in
                          public-private key cryptography, which is what gives
                          cryptocurrency its name.
                        </p>
                        <p>
                          To get your acquired fractional shares of real estate,
                          you'll need an Ethereum wallet that's compatible with
                          the Gnosis Chain so that the assets can be sent to
                          you. There are a variety of wallets to choose from,
                          and each one handles your private key differently.
                        </p>
                        <p>
                          Make certain you understand how each solution handles
                          your private keys.
                        </p>
                        <p>
                          It's critical to have a private key! Any owner of the
                          private key has access to any of the funds held in the
                          wallet with which it is associated.
                        </p>
                        <p>
                          More information regarding Ethereum wallets can be
                          found on the Ethereum.org website and on the Gnosis
                          Chain website.
                        </p>
                        <p>
                          SmartCrowd Wallet (mobile), Trust Wallet (mobile),
                          AlphaWallet (mobile), and MetaMask are among the
                          wallets we recommend (mobile and browser).
                        </p>
                        <p>
                          It's simple to make a wallet. You only need to
                          download and install the app of your choosing before
                          creating an account. When you create an account, the
                          app will provide you with a "recovery phrase" that you
                          must remember in order to keep access to your wallet.
                          You are not required to provide any personal
                          information, such as your email address or name.
                        </p>
                        <p>
                          You'll be able to find your public Ethereum/Gnosis
                          Chain address (which always starts with "0x") once
                          your account is created. This is the address to which
                          your SmartCrowdTokens and rentals will be sent.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 29 */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-29"
                      aria-expanded="false"
                    >
                      What can I do with the Tokens I owned?
                    </h6>
                    <div
                      id="faq-item-2-29"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Ethereum not only allows you to hold digital assets,
                          but it also allows you to conduct financial
                          transactions using the platform's built-in
                          applications. Ethereum applications allow users to
                          utilize their digital assets. On Ethereum, digital
                          assets can be used for trading, exchange, borrowing,
                          lending, derivatives, and prediction markets, among
                          other things
                        </p>
                        <p>
                          Financial applications built on Ethereum can provide
                          basic financial services to people who don't have
                          access to them in their own country. Many Ethereum
                          applications provide users with savings accounts or
                          investment options. Unlike traditional financial
                          services such as banks, where you give up ownership of
                          your assets and trust that the bank will keep them
                          safe, Ethereum applications allow you to keep full
                          control of your digital assets while using them in
                          financial applications.
                        </p>
                        <p>
                          This also applies to scalability layers such as Gnosis
                          Chain.
                        </p>
                        <p>
                          You can, for example, use Levinswap to exchange and
                          farm your tokens.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 30 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-30"
                      aria-expanded="false"
                    >
                      How the token price will change?
                    </h6>
                    <div
                      id="faq-item-2-30"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Your token's worth can be revalued higher or
                          downwards, just like traditional real estate.
                        </p>
                        <p>
                          SmartCrowd's goal is to estimate houses by year so
                          that all properties are priced correctly.
                        </p>
                        <p>
                          The value of the house, and hence of the tokens, is
                          affected by the revaluation of goods; not rentals.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* 31 */}

                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-31"
                      aria-expanded="false"
                    >
                      How the token price will change?
                    </h6>
                    <div
                      id="faq-item-2-31"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Yes, you can sell your tokens on different available
                          plaltforms, including:
                        </p>
                        <ul className="text-primary">
                          <li>SmartCrowd</li>
                          <li> Levinswap</li>
                          <li> Uniswap</li>
                          <li> SwapCat</li>
                          <li> AirSwap</li>
                        </ul>
                        <p>
                          Levinswap is a Gnosis Chain application that provides
                          liquidity for the tokens you buy. Levinswap allows you
                          to sell your assets immediately at market value. The
                          price of Levinswap tokens changes depending on supply
                          and demand, as well as overall market liquidity in
                          Levinswap. Uniswap is similar to Uniswap, however it
                          runs on Ethereum.
                        </p>
                        <p>
                          SwapCat and AirSwap allow you to make sales
                          announcements at any price you like, and smart
                          contracts ensure that the transaction between you and
                          the buyer goes smoothly. If a buyer is interested, he
                          can use the smart contract to purchase your tokens.
                        </p>
                        <p>
                          You must be whitelisted for the applicable property if
                          you want to buy on the secondary market (Levinswap,
                          Uniswap, AirSwap, and SwapCat).
                        </p>
                        <p>
                          On the SmartCrowd website, you can also sell your
                          tokens. You can make a sale request by clicking the
                          'Sell Tokens' option on the homepage. The SmartCrowd
                          website takes 8-14 days to complete sales. The tokens
                          are sold for the property's fair market value, as
                          established by the most recent appraisal. Once a year,
                          all properties are appraised again.
                        </p>
                        <p>
                          You are assured to be able to sell your tokens
                          instantaneously with Levinswap/Uniswap; however, the
                          price you receive in the sale is determined by the
                          market at the time.
                        </p>
                        <p>
                          You know the price you're selling the tokens for when
                          you sell on the website, but it's not an instantaneous
                          procedure.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="need-support text-center mt-100">
                    <h2>Still need help? Reach out to support 24/7:</h2>
                    <div className="btn-wrapper mb-30 go-top">
                      <Link to="/contact" className="theme-btn-1 btn">
                        Contact Us
                      </Link>
                    </div>
                    <h3>
                      <i className="fas fa-phone" /> +0123-456-789
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FaqContent;
