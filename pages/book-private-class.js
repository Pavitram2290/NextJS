'use client'

import Layout from "@/components/layout/Layout";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeadComponent from "@/components/layout/Header/Head";

export default function Book_Private_Class() {
    const router = useRouter();
    const [formStep, setFormStep] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');
    const [grades, setGrades] = useState([]);
    const [topics, setTopics] = useState([]);
    const [examinationBoard, setExaminationBoard] = useState([]);
    const [helpType, setHelpType] = useState([]);
    const [selectedHelpTypeIDs, setSelectedHelpTypeIDs] = useState([]);
    const nextFormStep = () => setFormStep(formStep + 1);
    const prevFormStep = () => setFormStep(formStep - 1);

    const title = "جرب أول عرض لك";
    const content = "لأن خدمات ياسا للحصص الخاصة المجدولة تساعدك في تحسين مستواك التعليمي بحيث تركز على أهم جوانب الضعف لديك وبشكل منظم.";
    
    const handleRadioChange = (e) => {
        setSelectedValue((preValue) => ({
            ...preValue,
            [e.target.name]: e.target.value
        }));
    }


    const onHelpTypeChange = (event) => {
        const { checked, value } = event.target;

        if (checked) {
            // If the checkbox is checked, add the ID to the array
            setSelectedHelpTypeIDs((prevIDs) => [...prevIDs, parseInt(value)]);
        } else {
            // If the checkbox is unchecked, remove the ID from the array
            setSelectedHelpTypeIDs((prevIDs) => prevIDs.filter((id) => parseInt(id) !== parseInt(value)));
        }
        console.log('selectedHelpTypeIDs :', selectedHelpTypeIDs)
    };

    const onFormSubmit = () => {
        const payload = {
            ...selectedValue,
            Topic: parseInt(selectedValue?.Topic),
            Grade: parseInt(selectedValue?.Grade),
            Boards: parseInt(selectedValue?.Boards),
            SubTopic: null,
            GuardianPhoneNumber: 987654321,
            YouAre: 'Demo',
            HelpType: selectedHelpTypeIDs
        }
        saveDemoClassWeb(payload);

    }

    const saveDemoClassWeb = (payload) => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/SaveDemoClassWeb';
        axios.post(apiUrl, payload)
            .then(response => {
                console.log('Submit Book Private Class:', response.data.IsSuccess);
                if (response.data.IsSuccess) {
                    toast.success('تم استلام طلبك وسيتواصل معك أحد أعضاء فريقنا');
                    router.push('/private-class');
                }
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };


    const getGradeList = () => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/GetGrade'; 
        const headers = {
            langid: 2
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                setGrades(response.data.Data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const getTopicsList = () => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/GetTopics';
        const headers = {
            langid: 2
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                setTopics(response.data.Data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const getExaminationBoard = () => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/GetExaminationBoard';
        const headers = {
            langid: 2
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                setExaminationBoard(response.data.Data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };

    const getHelpType = () => {
        const apiUrl = 'https://us-central1-yasa-21022022.cloudfunctions.net/GetHelpType';
        const headers = {
            langid: 2
        };
        axios.get(apiUrl, { headers })
            .then(response => {
                setHelpType(response.data.Data);
            })
            .catch(error => {
                console.error('Error posting data:', error);
            });
    };



    useEffect(() => {
        getGradeList();
        getTopicsList();
        getExaminationBoard();
        getHelpType();
    }, [])



    return (
        <>
        
        <ToastContainer />
        <HeadComponent title={title}
            content={content}
            />

            <Layout siteContentClass="p-0">
                <div>
                    {formStep === 0 && (
                        <div className='select-subject-sec spdtb bg-light'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="heading mx-0 mw-100">
                                            <h1 className="title text-center">ابدأ بما هو أكثر أهمية بالنسبة لك</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="select-subject-wrapper">
                                            <h2 className="title mb-4">حدد المنهج</h2>

                                            <div className="cis-radio-box">
                                                {
                                                    examinationBoard?.map((board) => (
                                                        <label className="select-subject-label" key={board?.ID}>
                                                            <input type="radio" value={1} name="Boards" onChange={handleRadioChange} />
                                                            <div className="icon-box">
                                                                <h3 className="title">{board?.ExaminationBoard}</h3>
                                                            </div>
                                                        </label>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="cis-divider">
                                            <span>و</span>
                                        </div>
                                    </div>

                                    {/* *********TOPICS SECTION*********** */}
                                    <div className="col-md-12">
                                        <div className="select-subject-wrapper">
                                            <h2 className="title">ابدأ بما هو أكثر أهمية بالنسبة لك</h2>

                                            <div className="select-subject">
                                                {
                                                    topics?.map((topic) => (
                                                        <div className="subject-col" key={topic?.ID}>
                                                            <label className="select-subject-label">
                                                                <input type="checkbox" value={topic?.ID} name="Topic" onChange={handleRadioChange} />
                                                                <div className="icon-box">
                                                                    <div className="inner">
                                                                        <div className="icon">
                                                                            <img src={topic?.ImageURl} alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h3 className="title">{topic?.Value}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="step-form-btn d-flex gap-3 mt-4 flex-content-e">
                                            <button className="button fullfield" title="" onClick={nextFormStep}>التالي</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ******Help Type******** */}
                    {formStep === 1 && (
                        <div className='select-subject-sec spdtb bg-light'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="select-subject-wrapper">
                                            <h2 className="title mb-4">ما نوع المساعدة التي تحتاجها</h2>
                                            <div className="select-subject">
                                                {
                                                    helpType?.map((help) => (
                                                        <div className="subject-col" key={help.ID}>
                                                            <label className="select-subject-label">
                                                                <input
                                                                    type="checkbox"
                                                                    value={help.ID}
                                                                    name="HelpType"
                                                                    onChange={onHelpTypeChange}
                                                                    checked={selectedHelpTypeIDs.includes(help.ID)}
                                                                />
                                                                <div className="icon-box">
                                                                    <div className="inner">
                                                                        <div className="icon">
                                                                            <img src={help?.ImageURL} alt="" />
                                                                        </div>
                                                                        <div className="content">
                                                                            <h3 className="title">{help?.Value}</h3>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="step-form-btn d-flex gap-3 mt-4 flex-content-e">
                                            <button className="button fullfield" title="" onClick={nextFormStep}>التالي</button>
                                            <button className="button fullfield-dark" title="" onClick={prevFormStep}>السابق</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    {formStep === 2 && (
                        <div className='select-subject-sec spdtb bg-light'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="select-subject-wrapper">
                                            <h2 className="title mb-4">معلومات الاتصال</h2>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="field-input">
                                                        <label htmlFor="StudentName">الاسم الكامل*</label>
                                                        <input type="text" name="StudentName" id="StudentName" onChange={handleRadioChange} placeholder="أدخل اسمك الكامل" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="field-input">
                                                        <label htmlFor="StudentEmail">بريد إلكتروني
</label>
                                                        <input type="text" name="StudentEmail" id="StudentEmail" onChange={handleRadioChange} placeholder="أدخل بريدك الإلكتروني" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="field-input">
                                                        <label htmlFor="Contact">رقم التليفون*</label>
                                                        <input type="text" name="Contact" id="Contact" onChange={handleRadioChange} placeholder="أدخل رقم هاتفك" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="field-input field-textarea">
                                                        <label htmlFor="Description">رسالة*
*</label>
                                                        <textarea name="Description" id="Description" cols={30} rows={10} onChange={handleRadioChange} placeholder="تعليمات أو متطلبات خاصة (اختياري)" defaultValue={""} />
                                                        <p className="small">ستتم مشاركة هذه الملاحظات مع فريق الاستشارة لدينا

</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="field-input">
                                                        <label>المعلومات الأكاديمية

                                                            <p className="small">الرجاء تحديد صفك الحالي

</p>

                                                        </label>
                                                        <div className="cis-radio-box size-sm">
                                                            {
                                                                grades?.map((grade) => (
                                                                    <label className="select-subject-label" key={grade?.ID}>
                                                                        <input type="radio" name="Grade" value={grade?.ID} onChange={handleRadioChange} />
                                                                        <div className="icon-box">
                                                                            <h3 className="title">{grade?.Value}</h3>
                                                                        </div>
                                                                    </label>
                                                                ))
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-12">
                                                    <div className="field-input">
                                                        <label>You are</label>
                                                        <div className="cis-radio-box size-sm">
                                                            <label class="select-subject-label">
                                                                <input type="radio" name="YouAre" value={1} onChange={handleRadioChange} />
                                                                <div class="icon-box">
                                                                    <h3 class="title">Student</h3>
                                                                </div>
                                                            </label>
                                                            <label class="select-subject-label">
                                                                <input type="radio" name="YouAre" value={2} onChange={handleRadioChange} />
                                                                <div class="icon-box">
                                                                    <h3 class="title">Guardian/Parent</h3>
                                                                </div>
                                                            </label>
                                                            <label class="select-subject-label">
                                                                <input type="radio" name="You" value={3} onChange={handleRadioChange} />
                                                                <div class="icon-box">
                                                                    <h3 class="title">Educator</h3>
                                                                </div>
                                                            </label>
                                                            <label class="select-subject-label">
                                                                <input type="radio" name="YouAre" value={4} onChange={handleRadioChange} />
                                                                <div class="icon-box">
                                                                    <h3 class="title">Other</h3>
                                                                </div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                {/* <div className="col-md-12">
                                                    <div className="field-input field-textarea">
                                                        <label >Guardian's phone number*</label>
                                                        <input type="text" name="GuardianPhoneNumber" placeholder="Enter guardian's phone number" onChange={handleRadioChange} />
                                                    </div>
                                                </div> */}
                                                <div className="col-md-12">
                                                    <img alt="" src="/assets/images/filo-img/capcha.png" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="step-form-btn d-flex gap-3 mt-4 flex-content-e">
                                            <button type='button' className="button fullfield" onClick={onFormSubmit} title="">إرسال</button>
                                            <button className="button fullfield-dark" title="" onClick={prevFormStep}>السابق</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            </Layout>


        </>
    )
}