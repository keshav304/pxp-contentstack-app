
import React, {useState} from 'react';
import { Button } from '@contentstack/venus-components';
import DetailCard from '../DetailCard'
import "./style.scss";
import TooltipButton from '../TooltipButton';

import { cbModal } from '@contentstack/venus-components';
import AddTagModal from './AddTagModal'
import { useLocation } from 'react-router-dom';

interface PersonifyMissionDetailPageProps {
  // missionDetailPageinfo: {
  //   mission:string
  //   conversion?:string
  //   traffic?:string
  //   revenue?:string
  // }
}

const PersonifyMissionDetailPage:React.FC<PersonifyMissionDetailPageProps> = (props:PersonifyMissionDetailPageProps) => {
  const [isPurchasedProductsViewOpen, setIsPurchasedProductsViewOpen] =useState(true)
  const [isPagesVisitsViewOpen, setIsCategoriesVisitsOpen] =useState(true)
  const { state } = useLocation();

  const returnSummaryRow = (title1:String,value1:String,title2:String,value2:String,rate:String) => {
    return (
      <div className='summaryRowContainer'>
      <div className='summaryRowTitle1Container'>
        <span className='summaryTitleSpan'>{title1}</span>
        <span className='summaryValueSpan'>{value1}</span>
      </div>
      <div className='summaryRowTitle2Container'>
      <span className='summaryTitleSpan'>{title2}</span>
        <span className='summaryValueSpan'>{value2}</span>
      </div>
      <div className='summaryRowRateContainer'>
        <span>{rate}</span>
      </div>
    </div>
    )
  }
  const returnProductsRow = (title:String,code:String,value:String) => {
    return (
      <div className='productsRowContainer'>
      <div className='productsRowTitleContainer'>
        <span className='productsTitleSpan'>{title}</span>
        <span className='productsCodeSpan'>{code}</span>
      </div>
      <div className='productsRowValueContainer'>
        <span>{value}</span>
      </div>
    </div>
    )
  }
  const returnVisitsAndOthersRow = (title:String,rate:String) => {
    return (
      <div className='visitsAndOthersRowContainer'>
      <div className='visitsAndOthersRowTitleContainer'>
        <span>{title}</span>
      </div>
      <div className='visitsAndOthersRowRateContainer'>
         <span>{rate}</span>
      </div>
    </div>
    )
  }
  const onClose = () => {
    console.log('on add tag  modal close')
  }
  const handleAddTagClick = (args: any) => {
    console.log('handleClick', args)
        cbModal({
          component: (props:any) => <AddTagModal {...props} tags={args} />,
          modalProps: {
            onClose,
            onOpen: () => {
              console.log('onOpen gets called')
            },
            size: 'xsmall',
          },
          testId: 'cs-modal-storybook',
        })
      }

        return (
          <div className="missionDetailPageContainer">
                    <h2 className="missionDetailPageHeading"><span>Missions / {state.args.mission}</span></h2>
              <div className='tagsContainer'>

                <h3 className="tagSubHeading"><span>Tags:</span></h3>
                <div className='tagsRow'>
                  <TooltipButton title="Womens" tooltipContent="DC67DI"/>
                  <TooltipButton title="Combo" tooltipContent="RT68GN"/>
                  <TooltipButton title="Joggers" tooltipContent="GH69WD"/>
                  <TooltipButton title="LoungeWear" tooltipContent="AC70BN"/>
                  <TooltipButton title="Hoodies" tooltipContent="TC61KL"/>
                  <Button onClick={handleAddTagClick} buttonType="primary" 
                  style={{backgroundColor: "transparent",fontSize: "1.1rem", color:"#ff6d00", height: "fit-content"}}>
                    + Add Tag
                </Button>
                </div>
              </div>
              <div className='cardsContainer'>
              <DetailCard heading="Behaviour explorer" subheading="" >
                <div className="behaviourExplorerContainer"></div>
              </DetailCard>
              <DetailCard heading="Summary" subheading="">
                <div>
                  {returnSummaryRow("Revenue","576,088","Avg. Mission revenue","5.3%","7.5%")}
                  {returnSummaryRow("Traffic","576,088","Avg. Mission Traffic","16.54%","0%")}
                  {returnSummaryRow("Conv. rate","576,088","Avg. Mission Conv. rate","5.3%","-9.73%")}
                </div>
              </DetailCard>
              <DetailCard heading="Products" subheading="How they interacted with products?" >
                <div className="switchViewContainer">
                  <div className="switchViewButtonContainer">
                    <button className={`${isPurchasedProductsViewOpen ? 'isInView' : 'notInView'} switchViewPrimaryButton`} onClick={()=>{
                          if (!isPurchasedProductsViewOpen) {
                            setIsPurchasedProductsViewOpen(true)
                          }
                        }}>Purchased</button>
                        <button className={`${!isPurchasedProductsViewOpen ? 'isInView' : 'notInView'} switchViewSecondryButton`} onClick={()=>{
                          if (isPurchasedProductsViewOpen) {
                            setIsPurchasedProductsViewOpen(false)
                          }
                        }}>Viewed</button>
                      </div>
                        {isPurchasedProductsViewOpen ? <div>
                          <div>{returnProductsRow("Puma Womens Essentials Leggings Black","PU6595","1,100.05")}</div>
                          <div>{returnProductsRow("Brave Soul Womens Jude Joggers Slate","BV30828","680.98")}</div>
                          <div>{returnProductsRow("Bench Womens Laya Hoodie Black","EN5614","1,262.25")}</div>
                          <div>{returnProductsRow("Brave Soul Womens Jude Joggers Black","BV2546","547.68")}</div>
                        </div>:"No Products Viewed"}
                </div>
              </DetailCard>
              <DetailCard heading="Visits" subheading="Where did visit on the site?" >
              <div className="switchViewContainer">
                  <div className="switchViewButtonContainer">
                    <button className={`${isPagesVisitsViewOpen ? 'isInView' : 'notInView'} switchViewPrimaryButton`} onClick={()=>{
                          if (!isPagesVisitsViewOpen) {
                            setIsCategoriesVisitsOpen(true)
                          }
                        }}>Purchased</button>
                        <button className={`${!isPagesVisitsViewOpen ? 'isInView' : 'notInView'} switchViewSecondryButton`} onClick={()=>{
                          if (isPagesVisitsViewOpen) {
                            setIsCategoriesVisitsOpen(false)
                          }
                        }}>Viewed</button>
                      </div>
                        {isPagesVisitsViewOpen ? <div>
                          <div>{returnVisitsAndOthersRow("Other (https://www.google.com/)","94.73%")}</div>
                          <div>{returnVisitsAndOthersRow("https://www.mandmdirect.com/Secure/Account/SignIn","4.56%")}</div>
                          <div>{returnVisitsAndOthersRow("https://www.mandmdirect.com/#","0.69%")}</div>
                          <div>{returnVisitsAndOthersRow("https://www.mandmdirect.com/#mmCarousel","0.01%")}</div>
                          <div>{returnVisitsAndOthersRow("https://www.mandmdirect.com/Secure/Checkout/OrderConfirmation/282268481","0.01%")}</div>
                        </div>:"No Products Viewed"}
                </div>
              </DetailCard>
              <DetailCard heading="Source" subheading="Where did users come from?" >
                <div className="sourceCardContainer">
                  <div>{returnVisitsAndOthersRow("Other (https://www.google.com/)","17.48%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.mandmdirect.com/)","4.56%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.google.co.uk/)","0.69%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.mandmdirect.com/01/juicy-couture)","0.01%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.google.com/)","17.48%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.mandmdirect.com/)","4.56%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.google.co.uk/)","0.69%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.mandmdirect.com/01/juicy-couture)","0.01%")}</div>
                  <div>{returnVisitsAndOthersRow("Other (https://www.mandmdirect.com/%3Futm_source%3DClearpay%26utm_medium%3Dreferral%26u","0.01%")}</div>
              </div>
              </DetailCard>
              </div>
            {/* </ModalBody>
    
            <ModalFooter>
              <ButtonGroup>
                <Button buttonType='light' onClick={() => props.closeModal()}>
                  Cancel
                </Button>
                <Button>Save</Button>
              </ButtonGroup>
            </ModalFooter> */}
          </div>
        )
}
export default PersonifyMissionDetailPage