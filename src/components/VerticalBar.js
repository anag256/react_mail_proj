import React from 'react'
import './VerticalBar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DiamondIcon from '@mui/icons-material/Diamond';
import PieChartIcon from '@mui/icons-material/PieChart';
import MailIcon from '@mui/icons-material/Mail';
import WidgetsIcon from '@mui/icons-material/Widgets';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import PersonIcon from '@mui/icons-material/Person';
function VerticalBar({setIconClicked,iconClicked}) {
    return (
        <div className={`verticalBar ${iconClicked && 'redHeight'}`}>
        <div className='flxcls'>
            <AccountCircleIcon style={{width:'50',height:'50',color:'#989fa9'}}/>
            <h4>David Williams</h4>
            <p>Art Director</p>
            </div>
            <ul className='vertical_ul'>
                <li><DashboardIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Dashboards</span></li>
                <li><DiamondIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Layouts</span></li>
                <li><PieChartIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Graphs</span></li>
                <li><MailIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Mailbox</span></li>
                <li><PieChartIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Metrics</span></li>
                <li><WidgetsIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Widgets</span></li>
                <li><DynamicFormIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>Forms</span></li>
                <li><WidgetsIcon style={{color:'#989fa9',width:'16px'}}/> <span className='li_txt'>App Views</span></li>
                
            </ul>
        </div>
    )
}

export default VerticalBar
