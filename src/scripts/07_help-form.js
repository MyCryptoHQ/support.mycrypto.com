/* Format of HTML:
   parent div: id="addl_1"
   label     : id="addl_1--label"
   input     : id="addl_1--input"

   <div class="form-group row form__addl-field" id="addl_1">
    <label for="addl_info_1" class="col-2 col-form-label" id="addl_1--label">Your Address</label>
    <div class="col-10">
      <input class="form-control"
             type="text"
             name="addl_info_1"
             id="addl_1--input" >
    </div>
  </div>
*/


function validateForm(e) {

  e.preventDefault()

  // set validated to true at the beginning
  var validated = true;

  // what fields are required?
  var req_fields = [ 'main_name', 'main_email', 'main_sub', 'addl_addr', 'main_msg' ]

  $.each( req_fields, function(i, el){
    elem       = $( '#' + el )
    elem_input = $( '#' + el + '--input' )
    elem_label = $( '#' + el + '--label' )

    if ( $(elem_input).val().length > 0 ) {
      $(elem).removeClass('has-danger').addClass('has-success')
      $(elem_input).removeClass('form-control-danger').addClass('form-control-success')
    } else {
      $(elem).removeClass('has-success').addClass('has-danger')
      $(elem_input).removeClass('form-control-success').addClass('form-control-danger')
      validated = false; // set validated to false
    }

    if (el == 'addl_addr') {
      if ( $(elem_input).val().length > 30 ) {
        $(elem).removeClass('has-danger').addClass('has-success')
        $(elem_input).removeClass('form-control-danger').addClass('form-control-success')
      } else {
        $(elem).removeClass('has-success').addClass('has-danger')
        $(elem_input).removeClass('form-control-success').addClass('form-control-danger')
        validated = false; // set validated to false
      }
    } else if (el == 'main_email') {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if ( $(elem_input).val().length > 5 && re.test($(elem_input).val().toLowerCase()) ) {
        $(elem).removeClass('has-danger').addClass('has-success')
        $(elem_input).removeClass('form-control-danger').addClass('form-control-success')
      } else {
        $(elem).removeClass('has-success').addClass('has-danger')
        $(elem_input).removeClass('form-control-success').addClass('form-control-danger')
        validated = false; // set validated to false
      }
    }

    // if validated is not false for all fields, submit the form
    if ( ( i == req_fields.length-1 ) && validated ) {
      submitForm()
    }

  })

}


function updateAddlFields(e) {

  var the_subject = e.target.value;

  resetAddlFields()

  showHelpers( the_subject )

  showFields( the_subject )

}


function submitForm() {

  var form         = $('#fa-form-1')

  // Message
  var message  = '\n' + $('#main_msg--input' ).val() + '\n\n'

  // Add'l Fields
  var addl_array = [ 'addl_addr', 'addl_tx', 'addl_1', 'addl_2']
  var addl_fields = ''
  $.each( addl_array, function(i, el){
    elem       = $( '#' + el )
    elem_val   = $( '#' + el + '--input' ).val()
    elem_label = $( '#' + el + '--label' ).text()
    if ( elem_val.length > 0 ) {
      if ( elem_val.length == 42 && elem_val.substring(0, 2) == '0x' ) {
        addl_fields += elem_label + ': https://etherscan.io/address/' + elem_val
        addl_fields += '\n'
      } else if ( elem_val.length == 66 && elem_val.substring(0, 2) == '0x' ) {
        addl_fields += elem_label + ': https://etherscan.io/tx/' + elem_val
        addl_fields += '\n'
      } else {
        addl_fields += elem_label + ': ' + escapeHtml(elem_val)
        addl_fields += '\n'
      }
    }

    message = escapeHtml(message)
  })

  /*
    'Doc Ref        ' + ': ' + document.referrer  + '\n'
    'Window Loc     ' + ': ' + window.location.href  + '\n'

    'Browser        ' + ': ' + platform.name        + '\n'
    'OS             ' + ': ' + platform.os.family   + '\n'
    'Full Env.      ' + ': ' + platform.description + '\n'
    'UA             ' + ': ' + platform.ua
  */

  var attr = 'aHR0cHM6Ly93ZWJob29rLmZyb250YXBwLmNvbS9mb3Jtcy9teWV0aGVyd2FsbGV0LzEzYWMzYjIwZjA5MWQ4YTRkNjg3MjljNmIwZWFmZjAwYTMwYjM2YzU5MTgwNGFiOWViZjRkZGUwOWMwNjA5OTlmMTgzYmJmZWNmNDJkM2M1ZWI2NzY4ODBiZjQxMGI1Mg=='
  var debug_info  = '\nDebug Info: ' + platform.description + ' \n via ' + document.referrer + ' or ' + window.location.href

  $('#textarea_body').val( escapeHtml(message) + addl_fields + debug_info)

  $('#addl_addr--input' ).val('')
  $('#addl_tx--input' ).val('')
  $('#addl_1--input' ).val('')
  $('#addl_2--input' ).val('')
  $('#main_msg--input' ).val('')

  form.attr('action', atob(attr))
  form.submit()

}

function displayFlex(el) {
  el.css('display', 'flex')
}


function updateLabel(el, content) {
  el.find('label').text( content )
}

function updateHolder(el, content) {
  el.find('.form-control').attr( "placeholder", content );
}

function resetAddlFields() {
  $('.form__addl-field').hide()
  $('.kb_helpers').hide()
  $('#addl_1--input').val('')
  $('#addl_2--input').val('')
}


function showHelpers( the_subject ) {
  $('.helpers--' + the_subject ).show() // e.g. helpers--accessing-wallet
}


function showFields( the_subject  ) {
  var addl_1    = $('#addl_1')
  var addl_tx   = $('#addl_tx')
  // show appropriate fields & helpers
  switch ( the_subject  ) {
      case 'no-subject':
        // do nothing
        break;
      case 'accessing-wallet':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Wallet Type    ' )
        updateHolder( addl_1, 'e.g. Private Key, Keystore file, MetaMask, Ledger....' )
        break;
      case 'adding-tokens':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Token Name     ' )
        updateHolder( addl_1, 'e.g. SNT, Aragon, BAT... ' )
        break;
      case 'coinbase':
        // do something
        break;
      case 'ens':
        displayFlex(  addl_tx )
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'ENS Name       ' )
        updateHolder( addl_1, 'e.g. mewtopia.eth... ' )
        break;
      case 'exchanging':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Exchange       ' )
        updateHolder( addl_1, 'e.g. Coinbase, Gemini, Kraken... ' )
        break;
      case 'getting-started':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Where are you stuck?' )
        updateHolder( addl_1, 'e.g. I created a wallet but then I got this error... ' )
        break;
      case 'keystore-file':
        break;
      case 'hardware-wallet':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Error message  ' )
        updateHolder( addl_1, 'e.g. Error Code 5' )
        break;
      case 'phishing':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'URL you visited' )
        updateHolder( addl_1, 'e.g. myethereumwallet.com' )
        break;
      case 'lost-password':
        break;
      case 'lost-pk':
        break;
      case 'metamask':
        break;
      case 'nodes-networks':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Network or Node Type' )
        updateHolder( addl_1, 'e.g. UBIQ, Custom Private network...' )
        break;
      case 'other':
        // do something
        break;
      case 'private-key':
        break;
      case 'sending-transaction':
        displayFlex(  addl_tx )
        // do something
        break;
      case 'sending-tokens':
        displayFlex(  addl_tx )
        break;
      case 'swap':
        displayFlex(  addl_1 )
        updateLabel(  addl_1, 'Ref #          ' )
        updateHolder( addl_1, 'e.g. BITYZXJV3U' )
        break;
      default:
  }
}


function getQueryString(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
